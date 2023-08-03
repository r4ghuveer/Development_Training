import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;

    return (
      <div className='my-3'>
        <div className="card" >
            <img src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLMGq_I7o2xML3gPSSEMxVkRPCcQ1JbJGxWA&usqp=CAU"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <span className="d-inline-flex mb-3 px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2">{source}</span>
          
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-body-secondary" >By {author?author:"unknown"} on {date?new Date(date).toGMTString():"unknown"}</small></p>
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
            </div>
          </div>
      </div>
    )
  }  
}

export default NewsItem
