import React from 'react';
const { Component} = React;

import './close.css';

class Close extends Component {
    render() {
        return (
            <div className="sidebar_close_btn" onClick={this.props.handler}>&#10006;</div>
        )
    }
}

export default Close;