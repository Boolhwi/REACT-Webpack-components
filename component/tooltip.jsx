import React from 'react';
const { Component } = React;

import Toggle from './tooltip/toggle';

import './tooltip.css';

class Tooltip extends Component {

    state = {
        toggle: false
    }

    tooltip_toggle = () => {

        if (this.state.toggle) {
            this.setState({
                toggle: false
            })
        }
        else {
            this.setState({
                toggle: true
            })
        }
    }

    render() {

        if (this.state.toggle) {
            return (
                <div>
                    <div className="tooltip_btn" onClick={this.tooltip_toggle}>
                        {this.props.tooltip.title}
                    </div>
                    <div>
                        <Toggle contents={this.props.tooltip.contents} handler={this.tooltip_toggle}/>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div>
                    <div className="tooltip_btn" onClick={this.tooltip_toggle}>
                        {this.props.tooltip.title}
                    </div>
                </div>
            )
        }
    }
}

export default Tooltip;