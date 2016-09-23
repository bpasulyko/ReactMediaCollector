import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {red900, red600} from 'material-ui/styles/colors';

export default class AddNewModal extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '' }
    }

    setTitle = (title) => () => {
        this.props.onSubmitModal(title);
    }

    handleOnChange = (e) => {
        this.setState({ title:e.target.value });
    }

    render() {
        const actions = [
            <RaisedButton
                label="Submit"
                keyboardFocused={true}
                backgroundColor={red600}
                labelColor='white'
                style={{
                    marginRight:'10px'
                }}
                onTouchTap={this.setTitle(this.state.title)}
            />,
            <RaisedButton
                label="Cancel"
                onTouchTap={this.props.onToggleModal}
                backgroundColor={red600}
                labelColor='white'
            />,
        ];

        const searchBox = <TextField
            fullWidth={true}
            floatingLabelText='Search'
            onChange={this.handleOnChange}
            inputStyle={{
                color:'white'
            }}
            floatingLabelFocusStyle={{
                color:'white'
            }}
            underlineFocusStyle={{
                borderColor:'white'
            }}
        />

        return (
            <Dialog
              title="Add New Movie or TV Show"
              actions={actions}
              modal={false}
              open={this.props.modalOpen}
              onRequestClose={this.props.onToggleModal}
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
                {searchBox}
            </Dialog>
        );
    }
}
