require('../../index.html');
import $ from 'jquery';
import _ from 'lodash';
import Promise from 'bluebird';
import React from 'react';
import { render } from 'react-dom';
import Test from './content';

import "../scss/style.scss";

const target = document.getElementById('root');
render(<Test thing='Test prop'/>, target);

$(document).ready(() => {
    var arr = [1,2,3,4,5];
    $('main').append(_.map(arr, function (n) { return n*2; }));

    promiseTest().then(displayResult);
});

function promiseTest() {
  return Promise.resolve('blah');
}

function displayResult(result) {
    $('main').append(result);
}
