import React from 'react'
import './Article.css';

const Article = ({imgUrl,date,title}) => {
  return (
    <div className='article'>
      <div className='article-image'>
        <img src={imgUrl} alt='blog'></img>
      </div>
      <div className='article-content'>
        <p>{date}</p>
        <h3>{title}</h3>
      <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article