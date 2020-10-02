import React from 'react';
const { Component} = React;

class Big_image extends Component {
    render() {
        return (
            <div>
                <img src={this.props.big_image}></img>
            </div>
        )
    }
}

export default Big_image;