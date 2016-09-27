import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import {red900, red600} from 'material-ui/styles/colors';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

export default class AddNewModal extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '' }
    }

    render() {
        var dialogContent = '';
        if (this.props.searchResult.length > 0) {
            dialogContent = <SearchResults searchResult={this.props.searchResult}/>
        } else {
            dialogContent = <SearchInput onSearch={this.props.onSearch}/>;
        }
        var title = (this.props.type === 'movie') ? 'Add a Movie' : 'Add a TV Show';

        return (
            <Dialog
              title={title}
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
