import $ from 'jquery';
import _ from 'lodash';
import Promise from 'bluebird';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import axios from 'axios';

import "../scss/style.scss";

const API_KEY = 'c61fe26ad89f613231e56e67cff3779d';
const BASE_URL = 'https://api.themoviedb.org/3';

injectTapEventPlugin();

if (window.location.href.indexOf('request_token') === -1) {
    axios.get(`${BASE_URL}/authentication/token/new?api_key=${API_KEY}`)
        .then((result) => {
            window.location = `https://www.themoviedb.org/authenticate/${result.data.request_token}?redirect_to=http://localhost:3000`;
        })
        .catch();
} else {
    var requestToken = window.location.href.split('?')[1].split('&')[0].split('=')[1];
    console.log(requestToken);
    axios.get(`${BASE_URL}/authentication/session/new?api_key=${API_KEY}&request_token=${requestToken}`)
        .then((result) => {
            ReactDOM.render(<App sessionId={result.data.session_id} />, document.getElementById('root'));
        })
        .catch();
}
