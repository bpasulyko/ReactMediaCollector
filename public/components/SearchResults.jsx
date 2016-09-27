import React from 'react';
import {List, ListItem} from 'material-ui/List';
import {red900, red700} from 'material-ui/styles/colors';

const SearchResults = ({ searchResult }) => (
    <List>
    {searchResult.map((item, index) =>
        <ListItem
            key={index}
            primaryText={item.title}
            style={{
                backgroundColor:red700,
                margin: '1px',
                color:'white'
            }}
        />
    )}
    </List>
);

export default SearchResults;
