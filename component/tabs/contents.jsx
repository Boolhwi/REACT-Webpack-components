import React from 'react';
const { Component} = React;

class Contents extends Component {

    render() {
        return (
            <div className="">
                {this.props.contents}
            </div>
        )
    }
}

export default Contents;