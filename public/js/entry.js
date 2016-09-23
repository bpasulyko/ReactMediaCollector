import $ from 'jquery';
import _ from 'lodash';
import Promise from 'bluebird';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

import "../scss/style.scss";

injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));
