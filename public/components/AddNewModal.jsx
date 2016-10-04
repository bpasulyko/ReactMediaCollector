import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import {red900, red700} from 'material-ui/styles/colors';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import ItemDetailView from './ItemDetailView';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import BackButton from 'material-ui/svg-icons/content/backspace';

export default class AddNewModal extends Component {
    constructor(props) {
        super(props);
    }

    clearSearchResults = () => {
        this.props.onClearSearchResults();
    }

    toggleModal = () => {
        return this.props.onToggleModal();
    }

    render() {
        var dialogContent = '';
        if (this.props.selectedResult) {
            dialogContent = (
                <ItemDetailView
                    imageConfig={this.props.imageConfig}
                    data={this.props.selectedResult}
                    onSave={this.props.onSave}
                    onClearSearchResults={this.props.onClearSearchResults}
                    type={this.props.type}
                />
            );
        } else if (this.props.searchResult.length > 0) {
            dialogContent = (
                <div>
                    <FlatButton
                        backgroundColor={red900}
                        label='Back'
                        labelStyle={{
                            color:'white'
                        }}
                        icon={<BackButton color='white' />}
                        onTouchTap={this.clearSearchResults}
                    />
                    <SearchResults
                        searchResult={this.props.searchResult}
                        onListItemClick={this.props.onSearchResultItemClick}
                        type={this.props.type}
                    />
                </div>
            )
        } else {
            dialogContent = <SearchInput onSearch={this.props.onSearch}/>;
        }

        return (
            <Dialog
                title={(this.props.type === 'movie') ? 'Add a Movie' : 'Add a TV Show'}
                modal={false}
                open={this.props.modalOpen}
                onRequestClose={this.toggleModal}
                autoScrollBodyContent={true}
                bodyStyle={{
                  backgroundColor:red900
                }}
                actionsContainerStyle={{
                  backgroundColor:red900
                }}
                titleStyle={{
                  backgroundColor:red900,
                  color:'white'
                }}
            >
                {dialogContent}
            </Dialog>
        );
    }
}
