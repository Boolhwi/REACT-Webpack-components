import React from 'react';
const { Component} = React;

class Close extends Component {
    render() {
        return (
            <button className="close" onClick={this.props.handler}>
                 &#10006;
            </button>
        )
    }
}

export default Close;