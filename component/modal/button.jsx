import React from 'react';
const { Component} = React;

class Button extends Component {

    render() {
        return (
            <button className="modal_btn" onClick={this.props.handler}>
                {this.props.button}
            </button>
        )
    }
}

export default Button;