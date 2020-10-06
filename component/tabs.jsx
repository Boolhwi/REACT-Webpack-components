import React from 'react';
const { Component } = React;

import Button from './tabs/button';
import Contents from './tabs/contents';

import './tabs.css';



class Tabs extends Component {

    state = {
        index: '0'
    }

    tab_handler = (idx) => {
        this.setState({
            index: idx
        })
    }

    render() {
        return (
            <div className="tab_container">
                <div className="tab_btn_container">
                    {this.props.tabs.map((tab, idx) => {

                        if (this.state.index === idx) {
                            return <Button key={tab.title}
                                title={tab.title} tab_handler={this.tab_handler} idx={idx} active='highlight_tab'
                            />
                        }
                        else {
                            return <Button key={tab.title}
                                title={tab.title} tab_handler={this.tab_handler} idx={idx} active='unhighlight_tab'
                            />
                        }
                    })}
                </div>
                <Contents contents={this.props.tabs[this.state.index].contents} />
            </div>
        )
    }
}

export default Tabs;