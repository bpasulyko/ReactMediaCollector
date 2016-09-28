import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import {red900, red600} from 'material-ui/styles/colors';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import FlatButton from 'material-ui/FlatButton';
import BackButton from 'material-ui/svg-icons/content/backspace';

export default class AddNewModal extends Component {
    constructor(props) {
        super(props);
    }

    clearSearchResults = () => {
        this.props.onClearSearchResults();
    }

    render() {
        var dialogContent = '';
        if (this.props.searchResult.length > 0) {
            dialogContent = (
                <div>
                    <FlatButton
                        backgroundColor={red900}
                        icon={<BackButton color='white' />}
                        onTouchTap={this.clearSearchResults}
                    />
                    <SearchResults
                        searchResult={this.props.searchResult}
                        onListItemClick={this.props.onSearchResultItemClick}
                    />
                </div>
            )
        } else {
            dialogContent = <SearchInput onSearch={this.props.onSearch}/>;
        }

        return (
            <Dialog
              modal={false}
              open={this.props.modalOpen}
              onRequestClose={this.props.onToggleModal}
              autoScrollBodyContent={true}
              bodyStyle={{
                  backgroundColor:red900,
                  height:'200px'
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
