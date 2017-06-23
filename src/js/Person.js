/**
 * Class representing a person
 */
class Person {
  /**
   * Create a person.
   * @param {string} [name] - person's name.
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * メッセージを返す。
   * @returns {string} their message.
   */
  say() {
    return `Hello, ${this.name}`;
  }
}
export { Person };
