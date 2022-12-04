export default class BrainProgressionUtil {
  static generateProgression(start, step, length) {
    return Array.from({ length }, (_, i) => start + (step * i));
  }
}
