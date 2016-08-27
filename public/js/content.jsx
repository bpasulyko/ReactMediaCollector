import React, { Component } from 'react';

class Test extends Component {
    render() {
        return (
            <div>
                <h1>This is my first react component</h1>
                <section>Congratulations, you just added your first component!</section>
                <section>{ this.props.thing }</section>
            </div>
        );
    }
}

export default Test;
