import $ from 'jquery';
import _ from 'lodash';
import Test from './content';

import "../scss/style.scss";

$(document).ready(() => {
    var thing = new Test({ text: 'thing1' });
    console.log(thing.get());
    var arr = [1,2,3,4,5];
    $('main').append(_.map(arr, function (n) { return n*2; }));
});
