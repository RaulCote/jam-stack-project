import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div className='four-cero-four'>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist.</p>
      <Link to="/" className='regular-link'>Home</Link>
    </div>
  </Layout>
)


export default NotFoundPage
