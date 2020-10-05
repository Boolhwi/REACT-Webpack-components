import React from 'react';
const { Component} = React;

import Big_image from './Big_image';
import Small_images from './Small_images';
import Close from './close';

import './window.css';

class Window extends Component {

    render() {
        return (
            <div className="window_background">
                <div className="window_content">
                    <div className="column1">
                        <Big_image big_image={this.props.window.big_image}/>
                    </div>
                    <div className="column2">
                        <Small_images small_images={this.props.window.small_images}/>
                    </div>
                    <div >
                        <Close handler={this.props.handler}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Window;