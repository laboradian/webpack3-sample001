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
   * 挨拶のメッセージを返す。
   * @returns {string} their message.
   */
  greet() {
    return `私は、${this.name} と言います。`;
  }
}
export { Person };
