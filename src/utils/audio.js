// Web Audio API generator for cinematic ambiance and tactile clicks
// No external MP3 required, zero bandwidth overhead, 100% reliable

let audioCtx = null;
let ambientOsc = null;
let ambientGain = null;
let isAmbientPlaying = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playTactileClick() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {
    // silently ignore if audio not allowed yet
  }
}

export function toggleAmbientSound(forceState) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return false;

    const nextState = forceState !== undefined ? forceState : !isAmbientPlaying;

    if (nextState) {
      if (!ambientOsc) {
        // Deep cinematic room tone / film projector drone
        ambientOsc = ctx.createOscillator();
        const subOsc = ctx.createOscillator();
        ambientGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(120, ctx.currentTime);

        ambientOsc.type = 'sine';
        ambientOsc.frequency.setValueAtTime(55, ctx.currentTime); // A1 note
        subOsc.type = 'triangle';
        subOsc.frequency.setValueAtTime(110, ctx.currentTime); // A2 subtle overtone

        ambientGain.gain.setValueAtTime(0.001, ctx.currentTime);
        ambientGain.gain.exponentialRampToValueAtTime(0.025, ctx.currentTime + 1.5);

        ambientOsc.connect(filter);
        subOsc.connect(filter);
        filter.connect(ambientGain);
        ambientGain.connect(ctx.destination);

        ambientOsc.start();
        subOsc.start();
        isAmbientPlaying = true;
      }
    } else {
      if (ambientGain) {
        ambientGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
        setTimeout(() => {
          if (ambientOsc) {
            try { ambientOsc.stop(); } catch(e) {}
            ambientOsc = null;
          }
          isAmbientPlaying = false;
        }, 850);
      } else {
        isAmbientPlaying = false;
      }
    }
    return nextState;
  } catch (e) {
    return false;
  }
}
