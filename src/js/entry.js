import $ from 'jquery'; // 任意
import fooCalculator from './fooCalculator';
import { Person } from './Person.js';
//import '../scss/entry.scss';

$(() => {

  // ボタンのクリックイベントハンドラを登録する
  $('#btnSubmit').on('click', () => {

    // fooCalculator を使う
    console.log("fooCalculator.multiplyBy2(2) =", fooCalculator.multiplyBy2(2));

    // Personを使う
    const p = new Person('foo');
    console.log("p.say() =", p.say());

  });

});
