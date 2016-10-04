import React, {Component} from 'react';
import {red900, red700} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import BackButton from 'material-ui/svg-icons/content/backspace';

export default class ItemDetailView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
        }
    }

    saveItem = () => {
        return this.props.onSave(this.state.id);
    }

    render() {
        var data = this.props.data;
        var baseUrl = this.props.imageConfig.base_url;
        var size = this.props.imageConfig.poster_sizes[4];
        var path = data.poster_path;
        var imageUrl = `${baseUrl}${size}${path}`;
        return (
            <div className='content-container'>
                <div className='image-container'>
                    <img src={imageUrl} />
                </div>
                <div className='details-container'>
                    <h2>{data.title} ({data.release_date.split('-')[0]})</h2>
                    <span>{data.overview}</span>
                </div>
                <div className='button-container'>
                    <RaisedButton
                        backgroundColor={red700}
                        label='Back'
                        labelStyle={{
                            color:'white'
                        }}
                        style={{
                            marginLeft:'10px'
                        }}
                        icon={<BackButton color='white' />}
                        onTouchTap={this.props.onClearSearchResults}
                    />
                    <RaisedButton
                        label="Save"
                        labelStyle={{
                            color:'white'
                        }}
                        style={{
                            marginLeft:'10px'
                        }}
                        backgroundColor={red700}
                        onTouchTap={this.saveItem}
                    />
                </div>
            </div>
        );
    }
}
