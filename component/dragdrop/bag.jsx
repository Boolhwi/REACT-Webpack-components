import React from 'react';
const { Component } = React;

import './bag.css';

class Bag extends Component {

    allowDrop(ev) {
        ev.preventDefault();
    }

    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    render() {
        return (
            <div className="bag_container">
                <div className="bag_name">
                    {this.props.bag}
                </div>
                <div className="bags" onDrop={this.drop} onDragOver={this.allowDrop}>
                </div>
            </div>
        )
    }
}

export default Bag;