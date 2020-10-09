import React from 'react';
const { Component} = React;

import Menu from './navbar/menu';
import Dropdown from './navbar/dropdown';

import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <Menu menu={this.props.navbar.menu}/>
                {this.props.navbar.dropdown.map((dropdown, idx) => {
                    return <Dropdown key={idx} dropdown={dropdown}/>
                })}
            </div>
        )
    }
}

export default Navbar;