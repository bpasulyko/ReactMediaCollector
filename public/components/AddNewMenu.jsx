import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui/svg-icons/action/home';
import AddIcon from 'material-ui/svg-icons/content/add';
import MovieIcon from 'material-ui/svg-icons/av/movie';
import TvIcon from 'material-ui/svg-icons/hardware/tv';
import {red900} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';

export default class AddNewMenu extends Component {
    handleTouchTap = (event, child) => {
        this.props.onItemClick(child.props.primaryText);
    }
    render() {
        return (
            <IconMenu
                iconButtonElement={
                  <IconButton><AddIcon color='white' /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                menuStyle={{
                    backgroundColor:red900
                }}
                onItemTouchTap={this.handleTouchTap}
            >
                <MenuItem
                    primaryText="Movie"
                    leftIcon={<MovieIcon color='white' />}
                    style={{
                        color:'white'
                    }} />
                <MenuItem
                    primaryText="TV"
                    leftIcon={<TvIcon color='white' />}
                    style={{
                        color:'white'
                    }} />
            </IconMenu>
        );
    }
}
