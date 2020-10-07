import React from 'react';
const { Component } = React;

import './arrow.css';

class Arrow extends Component {
    render() {
        return (
            <div className="arrow_container">
                <div className="left_arrow" onClick={()=>{this.props.handler("left")}}>
                    &#10094;
                </div>
                <div className="right_arrow" onClick={()=>{this.props.handler("right")}}>
                    &#10095;
                </div>
            </div>
        )
    }
}

export default Arrow;