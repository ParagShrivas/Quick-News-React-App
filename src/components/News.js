import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import '../card.css';
import Loader from './Loader';

export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData();
    }, [page]);

    const fetchData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.API_key}&page=${page}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setPage(page);
        setLoading(false);
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const handleNext = () => {
        setPage(page + 1);
    };

    const handlePrevious = () => {
        setPage(page - 1);
    };

    return (
        <div className='container'>
            <h2>Top {capitalizeFirstLetter(props.category)} Headlines</h2>
            <div className='container'>
                {loading && <Loader />}
                {articles && articles.length > 0 ? (
                    articles.map((element) => {
                        return (
                            <div key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 25) : ' '}
                                    description={element.description ? element.description.slice(0, 88) : ''}
                                    imageUrl={element.urlToImage ? element.urlToImage : 'https://i.pinimg.com/736x/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.jpg'}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />
                            </div>
                        );
                    })
                ) : (
                    <p>No Articles</p>
                )}
            </div>
            <button type="button" className="btn btn-dark" onClick={handlePrevious} disabled={page <= 1}>
                &larr; Previous
            </button>
            <button type="button" className="btn btn-dark" onClick={handleNext} disabled={articles.length < 5}>
                Next &rarr;
            </button>
        </div>
    );
}
