import React from 'react';
const { Component } = React;

class Button extends Component {

    render() {
        return (
            <button onClick={() => this.props.tab_handler(this.props.idx)}>
                {this.props.title}
            </button>
        )
    }
}

export default Button;