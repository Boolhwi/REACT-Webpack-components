import React from 'react';
const { Component } = React;

import './items.css';

class Item extends Component {

    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    render() {
        return (
            <div>
                <img className="items" id={this.props.item} src={this.props.item} alt="아이템 이미지" draggable="true" onDragStart={this.drag} />
            </div>
        )
    }
}

export default Item;