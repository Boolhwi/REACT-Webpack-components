import React from 'react';
const { Component} = React;

class Image extends Component {
    render() {
        return (
            <div>
                {this.props.image}
            </div>
        )
    }
}

export default Image;