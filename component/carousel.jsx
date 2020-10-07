import React from 'react';
const { Component } = React;

import Arrow from './carousel/arrow';
import Dot from './carousel/dot';

import './carousel.css';


class Carousel extends Component {

    state = {
        index: 0
    }

    arrow_handler = (direction) => {
        if (direction === "left") {
            if (this.state.index - 1 < 0) {
                this.setState({
                    index: this.props.carousel.length - 1
                })
            }
            else {
                this.setState({
                    index: this.state.index - 1
                })
            }
        }
        else {
            if (this.state.index + 1 > this.props.carousel.length - 1) {
                this.setState({
                    index: 0
                })
            }
            else {
                this.setState({
                    index: this.state.index + 1
                })
            }
        }
    }

    dot_handler = (idx) => {
        this.setState({
            index: idx
        })

    }

    render() {
        return (
            <div className="carousel_container">
                <img src={this.props.carousel[this.state.index]} alt="명장면" />
                <div>
                    <Arrow handler={this.arrow_handler} />
                </div>
                <div>
                    <Dot length={this.props.carousel} index={this.state.index} handler={this.dot_handler} />
                </div>
            </div>
        )
    }
}

export default Carousel;