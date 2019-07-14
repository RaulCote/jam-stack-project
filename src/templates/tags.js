import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'

class TagRoute extends React.Component {
  render() {
    console.log('TagRoute ::: edges ::: ', this.props.data.allMarkdownRemark.edges)
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
              to={post.node.fields.slug}
              className={'roll-post-image'}>
              {/* <img
              className={'roll-post-image'}
              alt={`${post.node.frontmatter.title} cover`}
              src={post.node.frontmatter.image.childImageSharp.fluid.src}
              /> */}
              <Img 
                // className={'roll-post-image'}
                fluid={post.node.frontmatter.image.childImageSharp.fluid}
                alt={`${post.node.frontmatter.title} cover`} />
            </Link> 
          </div>
        : null }
      </div>
    ))

    const imageLinks = posts.map(post => (
      <meta 
        property={'og:image'} 
        content={post.node.frontmatter.imageMeta.childImageSharp.fluid.src}
        key={post.node.fields.slug} />
    ))

    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    // const totalCount = this.props.data.allMarkdownRemark.totalCount
    // const tagHeader = `${totalCount} post${
    //   totalCount === 1 ? '' : 's'
    // } tagged with “${tag}”`

    return (
      <Layout>
        <Helmet 
          title={`${title} | ${tag}`}>
          <meta property={'og:type'} content={'article'} />
          {imageLinks}
        </Helmet>
          <div
            className="landing-image margin-top-0"
            style={{
              backgroundImage: `url('/img/latest-stories.jpg')`,
            }} />
          <h3 className={'section-class'}>
            Editions
          </h3>
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
                fluid(maxWidth: 1050, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageMeta: image {
              childImageSharp {
                fluid(maxWidth: 250, quality: 65) {
                  ...GatsbyImageSharpFluid
                }
              }
            }  
          }
        }
      }
    }
    editionsQuery: markdownRemark(frontmatter: {templateKey: {eq: "editions-page"}}) {
      frontmatter {
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
`
