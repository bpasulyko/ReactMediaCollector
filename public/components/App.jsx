import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavBar from '../components/NavBar';
import AddNewModal from '../components/AddNewModal';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            modalOpen:false,
            title:''
        }
    }

    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen })
    }

    submitModal = (title) => {
        this.setState({ title:title, modalOpen:false })
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                    <NavBar addButtonClick={this.toggleModal} />
                    <AddNewModal
                        modalOpen={this.state.modalOpen}
                        onToggleModal={this.toggleModal}
                        onSubmitModal={this.submitModal}
                    />
                    <h1>{this.state.title}</h1>
                </div>
            </MuiThemeProvider>
        );
    }
}
