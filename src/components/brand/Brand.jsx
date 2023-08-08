import React from 'react'
import './Brand.css';
import { google, slack, dropbox, shopify, atlassian } from './imports'

const Brand = () => {
  return (
    <div className='brand section-padding'>
      <div>
        <img src={google} alt='google'></img>
      </div>
      <div>
        <img src={slack} alt='slack'></img>
      </div>
      <div>
        <img src={dropbox} alt='dropbox'></img>
      </div>
      <div>
        <img src={shopify} alt='shopify'></img>
      </div>
      <div>
        <img src={atlassian} alt='atlassin'></img>
      </div>
    </div>
  )
}

export default Brand