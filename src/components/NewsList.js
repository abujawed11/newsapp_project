import React from 'react'
import news from './news.jpg'
import News2 from './News2.gif'

export default function NewsList(props) {

    const { title, description, imgSrc, newsUrl, author, date, source } = props;
    const myStyle = {display: 'flex',justifyContent: 'flex-end',position: 'absolute',right: '0'}

    return (

        <div>
            <div className="card">
                <div>
                    <span className="badge rounded-pill bg-danger" style={myStyle}>{source}</span>
                </div>
                <img src={imgSrc ? imgSrc : News2} className="card-img-top" alt={news} />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}
