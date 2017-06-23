import $ from 'jquery'; // 任意
import fooCalculator from './fooCalculator';
import { Person } from './Person.js';
//import '../scss/entry.scss';

$(() => {

  // ボタンのクリックイベントハンドラを登録する
  $('#btnSubmit').on('click', () => {

    // fooCalculator を使う
    $('#output1')
      .text(`2 * {数} = ${fooCalculator.multiplyBy2(parseInt($('#inputNumber').val()))}`)
      .fadeIn('slow');

    // Personを使う
    const p = new Person($('#inputName').val());
    $('#output2')
      .text(`${p.greet()}`)
      .show();

  });

  // ボタンのクリックイベントハンドラを登録する
  $('#btnClear').on('click', () => {
    $('#output1')
      .text('').hide();
    $('#output2')
      .text('').hide();

    });

});
