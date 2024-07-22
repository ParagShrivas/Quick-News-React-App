import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../card.css'
import Loader from './Loader';

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        this.fetchData();
    }

    fetchData = async (page = 1) => {
        let API_key = '1265973a155241cf9f1f0398bc7e2d28'; //replace with your key 
        //goto https://newsapi.org/ for API key
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${API_key}&page=${page}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: page,
            loading: false
        });
    };

    NextBtn = () => {
        this.fetchData(this.state.page + 1)
    };


    render() {
        return (
            <div className='container'>
                <h2>Top Headlines</h2>
                <div className='container'>
                    {this.state.loading && <Loader />}
                    {this.state.articles && this.state.articles.length > 0 ? (
                        this.state.articles.map((element) => {
                            return <div key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 25) : ' '}
                                    description={element.description ? element.description.slice(0, 88) : ''}
                                    imageUrl={element.urlToImage ? element.urlToImage : 'https://i.pinimg.com/736x/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.jpg'}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt} 
                                    source={element.source.name}/>
                            </div>
                        })
                    ) : (
                        <p>No Articles</p>
                    )}
                </div>
                <button type="button" className="btn btn-dark" onClick={() => this.fetchData(this.state.page - 1)} disabled={this.state.page <= 1}> &larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.NextBtn} disabled={this.state.page.size > 5}>Next &rarr;</button>
            </div>
        )
    }
}