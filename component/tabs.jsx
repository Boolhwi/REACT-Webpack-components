import React from 'react';
const { Component } = React;

import Button from './tabs/button';
import Contents from './tabs/contents';



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
            <div>
                <div className="tab_btn_container">
                    {this.props.tabs.map((tab, idx) => {
                        return <Button key={tab.title}
                            title={tab.title} tab_handler={this.tab_handler} idx={idx}
                        />
                    })}
                </div>
                <Contents contents={this.props.tabs[this.state.index].contents} />
            </div>
        )
    }
}

export default Tabs;