import React from 'react';
const { Component} = React;

import Title from './card/title';
import Content from './card/content';
import Image from './card/image';


class Card extends Component {

    render() {
        return (
            <div className="card_container">
                <div className="card_image">
                    <Image image={this.props.card.image}/>
                </div>
                <div className="card_title">
                    <Title title={this.props.card.title}/>
                </div>
                <div className="card_content">
                    <Content content={this.props.card.content}/>
                </div>
            </div>
        )
    }
}

export default Card;