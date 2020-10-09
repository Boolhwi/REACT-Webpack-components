import React from 'react';
const { Component } = React;

import Link from './link';

import './dropdown.css';

class Dropdown extends Component {

    state = {
        dropdown: false
    }

    click = () => {
        if(this.state.dropdown === true) {
            this.setState({
                dropdown: false
            })
        }

        else {
            this.setState({
                dropdown: true
            })
        }
    }

    render() {

        if (this.state.dropdown === true) {
            return (
                <div className="dropdown_container">
                        <div className="dropdown" onClick={this.click}>
                            <button className="dropdown_menu">{this.props.dropdown.title}</button>
                            <Link link={this.props.dropdown.link}></Link>
                        </div>

                </div>
            )
        }

        else {
            return (
                <div className="dropdown_container">
                        <div className="dropdown" onClick={this.click}>
                            <button className="dropdown_menu">{this.props.dropdown.title}</button>
                        </div>
                </div>
            )
        }
    }
}

export default Dropdown;