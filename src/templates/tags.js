import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <div key={post.node.fields.slug}>
        <div className={'container-card'}>
          <Link className={'roll-post-title'}to={post.node.fields.slug}>
            {post.node.frontmatter.title}
          </Link>
        </div>
        { post.node.frontmatter.image ?
          <div className={'roll-post-image-container'}>
            <Link
              to={post.node.fields.slug}>
              <img
              className={'roll-post-image'}
              src={post.node.frontmatter.image.childImageSharp.fluid.src}
              />
            </Link> 
          </div>
        : null }
      </div>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <Helmet title={`${title} | ${tag}`} />
          <div
            className="full-width-image-container margin-top-0"
            style={{
              backgroundImage: `url('/img/latest-stories.jpg')`,
            }}>
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                boxShadow: '0.5rem 0 0 rgba(17, 17, 17, 1), -0.5rem 0 0 rgba(17, 17, 17, 1)',
                backgroundColor: 'rgba(17, 17, 17, 1)',
                color: 'white',
                padding: '1rem',
              }}>
              Editions
            </h1>
          </div>
            {/* <h3 className="">{tagHeader}</h3> */}
            <article style={{
              marginTop: '20px'
            }}>{postLinks}</article>
            {/* <p>
              <Link to="/tags/">Browse all tags</Link>
            </p> */}
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }  
          }
        }
      }
    }
  }
`
