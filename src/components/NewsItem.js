import React, { Component } from 'react'
import '../card.css'
import { Link } from 'react-router-dom'
export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props

        return (
            <div className="card" style={{ '--clr': '#03a9f4' }}>
                <div className="imageBox">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Link to={newsUrl} target={`_blank`}>Read More</Link>
                </div>
            </div>
        )
    }
}
