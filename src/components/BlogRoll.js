import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const editionsPosts =
      posts &&
      posts.filter(post => post.node.frontmatter.tags.includes('editions'));

    return (
      <React.Fragment>
        {posts &&
          editionsPosts.map(({ node: post }) => (
            <article key={post.id}>
              <div className={'container-card'}>
                <Link className={'roll-post-title'} to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              </div>
              {post.frontmatter.image ? (
                <div className={'roll-post-image-container'}>
                  <Link className={'roll-post-image'} to={post.fields.slug}>
                    <Img
                      fluid={post.frontmatter.image.childImageSharp.fluid}
                      alt={`${post.frontmatter.title} cover`}
                    />
                  </Link>
                </div>
              ) : null}
            </article>
          ))}
      </React.Fragment>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                tags
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
