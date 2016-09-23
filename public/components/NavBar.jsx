import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {red900, red100} from 'material-ui/styles/colors';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        var appBar = <AppBar
            title="Media Collector"
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={<FlatButton label="Add" />}
            style={{
                backgroundColor: red900
            }}
            titleStyle={{
                width:'150px'
            }} />;

        var itemComponents = ['Home', 'Movies', 'TV Shows'].map((item, index) =>
            <MenuItem
                key={index}
                style={{
                    color:'white'
                }}
                onTouchTap={this.handleClose}>{item}</MenuItem>
        )

        var drawer = <Drawer
              docked={false}
              width={250}
              containerStyle={{
                  backgroundColor: red900
              }}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
                {itemComponents}
            </Drawer>
        return (
            <div>
                {appBar}
                {drawer}
            </div>
        );
    }
}
