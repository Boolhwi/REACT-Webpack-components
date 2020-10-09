import React from 'react';
const { Component} = React;

import './menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="menu_container">
                {this.props.menu.map((menu, idx) => {
                    return <button className="menu" key={idx}>{menu}</button>
                })}
            </div>
        )
    }
}

export default Menu;