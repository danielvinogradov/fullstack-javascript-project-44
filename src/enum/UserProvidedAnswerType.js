/**
 * Тип ответа, предоставленный пользователем.
 *
 * @type {Readonly<{Incorrect: string, Correct: string}>}
 */
const UserProvidedAnswerType = Object.freeze({
  /* Верный ответ */
  Correct: 'CORRECT',

  /* Неверный ответ */
  Incorrect: 'INCORRECT',
});

export default UserProvidedAnswerType;
