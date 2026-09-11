// Web Audio API procedural sound synthesis for Space Galaxy & Book interactions

let audioCtx = null;

const getAudioContext = () => {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

/**
 * Play rapid high-speed page flip sound effect ("sup-sup-sup-sup-shhh!")
 * Triggers multiple rapid white noise flutter bursts with filter sweeps
 */
export const playRapidPageFlipSound = (isMuted = false) => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const totalDuration = 1.2; // 1.2 seconds rapid flip sequence
    const numFlips = 10; // 10 rapid page flips ("sup-sup-sup-sup")

    for (let i = 0; i < numFlips; i++) {
      const startTime = ctx.currentTime + (i * 0.08); // 80ms interval between page flips
      const duration = 0.09;

      // Noise buffer for each flip
      const bufferSize = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);

      for (let j = 0; j < bufferSize; j++) {
        const env = Math.sin((j / bufferSize) * Math.PI);
        output[j] = (Math.random() * 2 - 1) * Math.pow(env, 1.4);
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      // Bandpass sweep from 3500Hz down to 800Hz for crisp paper flutter
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(3200 - (i * 150), startTime);
      filter.Q.setValueAtTime(2.0, startTime);
      filter.frequency.exponentialRampToValueAtTime(600, startTime + duration);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.35, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(startTime);
      noise.stop(startTime + duration);
    }

    // Deep cosmic thud / warp boom at the end of opening
    const boomOsc = ctx.createOscillator();
    const boomGain = ctx.createGain();
    boomOsc.type = 'sine';
    boomOsc.frequency.setValueAtTime(160, ctx.currentTime + 0.6);
    boomOsc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 1.2);

    boomGain.gain.setValueAtTime(0.4, ctx.currentTime + 0.6);
    boomGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

    boomOsc.connect(boomGain);
    boomGain.connect(ctx.destination);

    boomOsc.start(ctx.currentTime + 0.6);
    boomOsc.stop(ctx.currentTime + 1.2);

  } catch (err) {
    console.warn("Audio synthesis unavailable:", err);
  }
};

/**
 * Play a single paper flip sound effect
 */
export const playPageFlipSound = (isMuted = false) => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const bufferSize = ctx.sampleRate * 0.18;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      const noise = (Math.random() * 2 - 1);
      const envelope = Math.sin((i / bufferSize) * Math.PI);
      output[i] = noise * Math.pow(envelope, 1.8);
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(2200, ctx.currentTime);
    filter.Q.setValueAtTime(1.5, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.15);

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.25, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.17);

    whiteNoise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    whiteNoise.start();
    whiteNoise.stop(ctx.currentTime + 0.18);
  } catch (err) {
    console.warn("Audio synthesis unavailable:", err);
  }
};

/**
 * Short click sound
 */
export const playButtonClickSound = (isMuted = false) => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (err) {
    // Ignore context errors
  }
};
