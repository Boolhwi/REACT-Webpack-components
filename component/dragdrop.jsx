import React from 'react';
const { Component } = React;

import Item from './dragdrop/item';
import Bag from './dragdrop/bag';

import './dragdrop.css';


class DragDrop extends Component {

    render() {
        return (
            <div className="dragdrop_container">

                <div className="bags_container">
                    {this.props.dragdrop.bag.map((bag, idx) => {
                        return <Bag key={idx} bag={bag} />
                    })}
                </div>

                <div className="items_container">
                    {this.props.dragdrop.item.map((item, idx) => {
                        return <Item key={idx} item={item} />
                    })}
                </div>
            </div>
        )
    }
}

export default DragDrop;