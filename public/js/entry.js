import $ from 'jquery';
import Test from './content';

import "../scss/style.scss";

$(document).ready(() => {
    var thing = new Test({ text: 'thing1' });
    console.log(thing.get());
});
