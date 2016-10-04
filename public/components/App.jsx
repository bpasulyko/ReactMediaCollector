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
import axios from 'axios';

const API_KEY = 'c61fe26ad89f613231e56e67cff3779d';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            modalOpen:false,
            searchResult: [],
            selectedResult: null,
            type:null,
        }
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/configuration?api_key=${API_KEY}`)
            .then((result) => {
                this.setState({ imageConfig:result.data.images });
            })
            .catch((error) => {

            });
    }

    toggleModal = (type) => {
        this.setState({
            modalOpen: !this.state.modalOpen,
            searchResult:[],
            selectedResult: null,
            type: (type) ? type.toLowerCase() : '',
        });
    }

    search = (title) => {
        axios.get(`${BASE_URL}/search/${this.state.type}?api_key=${API_KEY}&language=en-US&query=${title}`)
            .then((result) => {
                this.setState({ searchResult:result.data.results });
            })
            .catch((error) => {

            });
    }

    onSearchResultItemClick = (id) => {
        axios.get(`${BASE_URL}/${this.state.type}/${id}?api_key=${API_KEY}&language=en-US`)
            .then((result) => {
                this.setState({ selectedResult:result.data });
            })
            .catch((error) => {

            });
    }

    onClearSearchResults = () => {
        this.setState({
            searchResult:[],
            selectedResult: null,
        });
    }

    saveItem = (id) => {
        console.log('saved ' + id + ' ' + this.state.type);
        this.setState({
            modalOpen: !this.state.modalOpen,
            searchResult:[],
            selectedResult: null,
            type: null,
        });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                    <NavBar addButtonClick={this.toggleModal} />
                    <AddNewModal
                        searchResult={this.state.searchResult}
                        onSearchResultItemClick={this.onSearchResultItemClick}
                        onClearSearchResults={this.onClearSearchResults}
                        modalOpen={this.state.modalOpen}
                        onToggleModal={this.toggleModal}
                        onSearch={this.search}
                        type={this.state.type}
                        imageConfig={this.state.imageConfig}
                        selectedResult={this.state.selectedResult}
                        onSave={this.saveItem}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}
