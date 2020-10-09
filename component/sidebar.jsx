import React from 'react';
const { Component } = React;

import Menu from './sidebar/menu';
import Close from './sidebar/close';

import './sidebar.css';

class Sidebar extends Component {

    state = {
        open: false
    }

    sidebar_open = () => {
        this.setState({
            open: true
        })
    }

    sidebar_close = () => {
        this.setState({
            open: false
        })
    }

    render() {

        if (this.state.open === true) {
            return (
                <div>
                    <div className="sidebar_container">
                        <Close handler={this.sidebar_close}/>
                        {this.props.sidebar.map((title, idx) => {
                            return <Menu key={idx} title={title} />
                        })}
                    </div>
                    <button className="sidebar_btn" onClick={this.sidebar_open}>
                        ☰ MENU
                    </button>
                </div>
            )
        }

        else {
            return (
                <div>
                    <button className="sidebar_btn" onClick={this.sidebar_open}>
                        ☰ MENU
                    </button>
                </div>
            )
        }

    }
}

export default Sidebar;