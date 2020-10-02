import React from 'react';
const { Component} = React;

import Big_image from './Big_image';
import Small_images from './Small_images';


class Window extends Component {

    render() {
        return (
            <div className="window_background">
                <div className="window_content">
                    <div className="window_big_image">
                        <Big_image big_image={this.props.window.big_image}/>
                    </div>
                    <div className="window_small_images">
                        <Small_images small_images={this.props.window.small_images}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Window;