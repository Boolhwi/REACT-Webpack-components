import React from 'react';
const { Component} = React;

class Image extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="인물 이미지"/>
            </div>
        )
    }
}

export default Image;