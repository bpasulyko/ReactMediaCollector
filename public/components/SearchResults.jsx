import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import {red900, red700} from 'material-ui/styles/colors';

export default class SearchResults extends Component {
    listItemClick = (id) => {
        this.props.onListItemClick(id);
    }

    getText = (item) => {
        return (this.props.type === 'movie')
            ? `${item.title} (${item.release_date.split('-')[0]})`
            : `${item.name} (${item.first_air_date.split('-')[0]})`;
    }

    render() {
        return (
            <List>
                {this.props.searchResult.map((item, index) =>
                    <ListItem
                        key={index}
                        primaryText={this.getText(item)}
                        style={{
                            backgroundColor:red700,
                            margin: '1px',
                            color:'white'
                        }}
                        onTouchTap={this.listItemClick.bind(this, item.id)}
                    />
                )}
            </List>
        );
    }
}
