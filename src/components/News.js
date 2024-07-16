import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../card.css'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        let API_key = '1265973a155241cf9f1f0398bc7e2d28'; //replace with your key 
        //goto https://newsapi.org/ for API key
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey='+API_key;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
            articles: parsedData.articles
        })
    }

    render() {
        return (
            <div className='container'>
                <h2>Top Headlines</h2>
                <div className='container'>
                    {this.state.articles && this.state.articles.length > 0 ? (
                        this.state.articles.map((element) => {
                            return <div  key={element.url}>
                                <NewsItem
                                    title={element.title? element.title.slice(0,25) : ' '}
                                    description={element.description ? element.description.slice(0, 88) : ''}
                                    imageUrl={element.urlToImage ? element.urlToImage :'https://i.pinimg.com/736x/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.jpg'}
                                    newsUrl={element.url} />
                            </div>
                        })
                    ) : (
                        <p>No articles available</p>
                    )}
                </div>
            </div>
        )
    }
}
