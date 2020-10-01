import React from 'react';
const { Component} = React;

import Card from './card';

class Main extends Component {
    state = {
        card :
        [
            {
                title: 'hello, webpack',
                content: 'lol',
                image:'kyo kyo'
            },
            {
                title: 'hello, na',
                content: 'cyphers',
                image:'ho ho'
            }
        ]
    }

    render() {
        return (
            <div>
                <Card card={this.state.card[0]}/>
                <Card card={this.state.card[1]}/>
            </div>
        )
    }
}

export default Main;