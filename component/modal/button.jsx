import React from 'react';
const { Component} = React;

class Button extends Component {

    render() {
        return (
            <button onClick={this.props.handler}>
                {this.props.button}
            </button>
        )
    }
}

export default Button;