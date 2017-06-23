import $ from 'jquery'; // 任意
import fooCalculator from './fooCalculator';
import { Person } from './Person.js';
//import '../scss/entry.scss';

$(() => {

  // ボタンのクリックイベントハンドラを登録する
  $('#btnSubmit').on('click', () => {

    // fooCalculator を使う
    $('#output1')
      .text(`fooCalculator.multiplyBy2(2) = ${fooCalculator.multiplyBy2(2)}`)
      .fadeIn('slow');

    // Personを使う
    const p = new Person('foo');
    $('#output2')
      .text(`p.say() = ${p.say()}`)
      .show();

  });

});
