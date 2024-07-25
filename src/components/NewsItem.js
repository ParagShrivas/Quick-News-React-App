import React, { Component } from 'react'
import '../card.css'
export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

        return (
            <div className="card" style={{ '--clr': '#03a9f4' }}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill text-bg-primary" style={{left : '90%',zIndex:'1'}}>
                    {source}</span>
                <div className="imageBox">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank">Read More</a>
                </div>
            </div >
        )
    }
}
