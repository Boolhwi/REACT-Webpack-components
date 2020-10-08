import React from 'react';
const { Component} = React;

import './toggle.css';

class Toggle extends Component {
    render() {
        return (
            <div className="tooltip_toggle" onClick={this.props.handler}>
                {this.props.contents}
            </div>
        )
    }
}

export default Toggle;