import React, { useEffect, useState } from 'react'
import NewsList from './NewsList'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'


export default function News(props) {

    let [loading, setLoading] = useState(true)
    let [page, setPage] = useState(1)
    let [totalResults, setTotalResults] = useState(0)
    const [articles, setArticles] = useState([])

    let updateNews = async () => {
        props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        const data = await fetch(url);
        props.setProgress(30)
        const parseData = await data.json();
        props.setProgress(70)
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        props.setProgress(100)
       
        document.title = `NewsMonkey - ${cap(props.category)}`
    }

    const cap = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    useEffect(() => {
        updateNews();

    }, [])


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        // const url = 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=f7e9363e5d9b405faf053724eab5010e';
        const data = await fetch(url);
        const parseData = await data.json();
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
    }




    return (
        <>
        <h1 className='text-center' style={{ marginTop: '4rem' }}>NewsMonkey - Top {cap(props.category)} Headlines</h1>
         {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}>
                <div className="container">
                    
                    <div className="row my-3">
                        {articles.map((element, i) => {
                            return (
                                <div className="col-md-4 my-3" key={i}>
                                    <NewsList title={element.title} description={element.description} imgSrc={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}


News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
};
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};


