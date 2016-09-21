import $ from 'jquery';
import _ from 'lodash';
import Promise from 'bluebird';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Test from './content';

import "../scss/style.scss";

injectTapEventPlugin();

const target = document.getElementById('root');
const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Test thing="props" />
  </MuiThemeProvider>
);
ReactDOM.render(<App />, target);
