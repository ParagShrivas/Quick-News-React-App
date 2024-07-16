import React, { Component } from 'react'
import '../card.css'
export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;

        return (
            <div className="card" style={{ '--clr': '#03a9f4' }}>
                <div className="imageBox">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <a href={newsUrl} target="_blank">Read More</a>
                </div>
            </div>
        )
    }
}
