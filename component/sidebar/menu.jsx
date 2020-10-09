import React from 'react';
const { Component} = React;
import './menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="sidebar_menu">
                {this.props.title}
            </div>
        )
    }
}

export default Menu;