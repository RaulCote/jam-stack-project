import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
// import landingImage from '../img/18.jpg'

import Layout from '../components/Layout'

// import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading
}) => (
    <div>
      {/* <div
        className={'landing-image'}
        // style={{
        //   backgroundImage: `url(${
        //     !!image.childImageSharp
        //       ? image.childImageSharp.fluid.src
        //       : image
        //   })`
        // }}
        >
          <Img 
            fluid={!!image.childImageSharp ? 
                      image.childImageSharp.fluid : 
                      image}
            style={{
              position: 'static'
            }}
            alt={'Ika About Page Cover'} /> 
        </div> */}
        <section className="blabla" style={{ marginTop: '20px'}}>
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="content">
                    <div className="column is-12">
                        {/* <h3 className={'section-class'}>
                          Latest stories
                        </h3> */}
                        <div className={'lastest-stories-container'}>
                          <BlogRoll />
                          <div className={'container-text container-button'}>
                            <Link className="btn" to="/tags/editions">
                              View More
                            </Link>
                          </div>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`

// ORIGINAL QUERY
// export const pageQuery = graphql`
// query IndexPageTemplate {
//   markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
//       frontmatter {
//         title
//         image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         heading
//         subheading
//         mainpitch {
//           title
//           description
//         }
//         description
//         intro {
//           blurbs {
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 240, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//       }
//     }
//   }
// `