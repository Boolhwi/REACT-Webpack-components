import React from 'react';
const { Component } = React;

import './button.css';

class Button extends Component {

    render() {
        return (
            <button className={this.props.active} onClick={() => this.props.tab_handler(this.props.idx)} >
                {this.props.title}
            </button>
        )
    }
}

export default Button;