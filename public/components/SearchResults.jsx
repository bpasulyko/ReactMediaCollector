import React from 'react';
import {List, ListItem} from 'material-ui/List';

const SearchResults = ({ searchResult }) => (
    <List>
    {searchResult.map((item, index) =>
        <ListItem
            key={index}
            primaryText={item.title}
            style={{
                backgroundColor:'white'
            }}
        />
    )}
    </List>
);

export default SearchResults;
