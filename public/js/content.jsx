import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {red900, grey100} from 'material-ui/styles/colors';

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <AppBar
                    title="AppBar"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    style={{
                        backgroundColor: red900
                    }} />
                <Drawer
                  docked={false}
                  width={200}
                  open={this.state.open}
                  onRequestChange={(open) => this.setState({open})}
                >
                  <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                  <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}
