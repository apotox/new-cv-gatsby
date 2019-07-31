import React, { Component } from 'react'


import Image from '../image'


export default class AnimatedItem extends Component {
    render() {
        
        return (
            <div className="animated-item-container">
                <Image  originalName={this.props.originalName} className={`animated-item-image ${this.props.className ? this.props.className : ""}`}/>
            </div>
        )
    }
}
