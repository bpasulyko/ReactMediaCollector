import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {red900} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui/svg-icons/action/home';
import MovieIcon from 'material-ui/svg-icons/av/movie';
import TvIcon from 'material-ui/svg-icons/hardware/tv';
import AddNewMenu from './AddNewMenu';

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
            iconElementRight={
                <AddNewMenu onItemClick={this.props.addButtonClick} />
            }
            style={{
                backgroundColor: red900
            }}
        />;

        var itemIcons = [
            <HomeIcon color='white' />,
            <MovieIcon color='white' />,
            <TvIcon color='white' />
        ] ;
        var itemComponents = ['Home', 'Movies', 'TV Shows'].map((item, index) =>
            <MenuItem
                key={index}
                style={{
                    color:'white'
                }}
                onTouchTap={this.handleClose}
                leftIcon={itemIcons[index]}
            >
                {item}
            </MenuItem>
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
