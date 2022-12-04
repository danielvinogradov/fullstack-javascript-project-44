import readlineSync from 'readline-sync';

export default class CliUtil {
  static print(value) {
    console.log(value);
  }

  static getUserInputWithQuestion(question) {
    return readlineSync.question(question);
  }
}
