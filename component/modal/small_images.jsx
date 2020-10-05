import React from 'react';
const { Component} = React;

class Small_images extends Component {
    render() {
        return (
            <div>
                <img className="window_small_images" src={this.props.small_images[0]}></img>
                <img className="window_small_images" src={this.props.small_images[1]}></img>
            </div>
        )
    }
}

export default Small_images;