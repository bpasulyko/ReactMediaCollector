import $ from 'jquery';
import _ from 'lodash';
import Promise from 'bluebird';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import "../scss/style.scss";

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <NavBar thing="props" />
  </MuiThemeProvider>
);
ReactDOM.render(<App />, document.getElementById('root'));
