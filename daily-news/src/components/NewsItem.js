import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{display: 'flex', justifyContent:'flex-end', position: 'absolute', right: '0'}}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
            <img src={imageUrl?imageUrl:"https://www.livemint.com/lm-img/img/2024/03/03/1600x900/licfl_1605096188482_1605096387798_1709462721815.jpg"} className="card-img-top" alt="News"/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
