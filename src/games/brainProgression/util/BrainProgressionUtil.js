const BrainProgressionUtil = Object.freeze({
  generateProgression(start, step, length) {
    return Array.from({ length }, (_, i) => start + (step * i));
  },
});

export default BrainProgressionUtil;
