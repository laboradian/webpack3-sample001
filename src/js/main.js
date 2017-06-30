/* global $ */
import myMathModule from './myMathModule';
import { Person } from './Person.js';
import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';

// HTMLファイルをコピーする
require('file-loader?name=../../dist/[name].[ext]!../index.html');

$(() => {

  // ボタンのクリックイベントハンドラを登録する
  $('#btnSubmit').on('click', () => {

    // myMathModule を使う
    const i = parseInt($('#inputNumber').val());
    $('#output1')
      .text(`2 * ${i} = ${myMathModule.multiplyBy2(i)}`)
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
