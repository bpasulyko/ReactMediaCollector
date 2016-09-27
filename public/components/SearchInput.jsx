import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search';
import RaisedButton from 'material-ui/RaisedButton';
import {red900, red600} from 'material-ui/styles/colors';

export default class SearchInput extends Component {
    search = () => {
        this.props.onSearch(this.textfield.input.value);
    }

    render() {
        return (
            <div>
                <TextField
                    fullWidth={true}
                    floatingLabelText='Search'
                    inputStyle={{
                        color:'white'
                    }}
                    floatingLabelFocusStyle={{
                        color:'white'
                    }}
                    underlineFocusStyle={{
                        borderColor:'white'
                    }}
                    ref={c => this.textfield = c}
                />
                <RaisedButton
                  backgroundColor={red600}
                  icon={<Search color='white' />}
                  label='Search'
                  style={{
                      float:'right'
                  }}
                  labelColor='white'
                  onTouchTap={this.search}
                />
            </div>
        );
    }
}
