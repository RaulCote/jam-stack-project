import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

class BlogRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    return (
      <div className="columns is-multiline">
      {posts && (posts
          .map(({ node: post }) => (
            <div
              className="is-parent column is-6"
              key={post.id}
            >
              <article className="tile is-child box notification">
                <div className={'container-card'}>
                  <Link className={'roll-post-title'} to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </div>
                { post.frontmatter.image ?  
                  <div className={'roll-post-image-container'}>
                    <Link 
                    to={post.fields.slug}
                    className={'roll-post-image'} >
                      <Img
                        // className={'roll-post-image'} 
                        fluid={post.frontmatter.image.childImageSharp.fluid}
                        alt={`${post.frontmatter.title} cover`}
                         />
                      {/* <img
                      className={'roll-post-image'} 
                      alt={`${post.frontmatter.title} cover`}
                      src={post.frontmatter.image.childImageSharp.fluid.src} 
                      />   */}
                    </Link>
                  </div>
                : null
                }
                {/* <p className={'container-text'}>
                  {post.excerpt}
                  <br />
                  <br />
                </p> */}
              </article>
            </div>
      )))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
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
              templateKey
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <BlogRoll data={data} count={count} />
    )}
  />
)
