import React from 'react'
import Layout from '../components/Layout'
import loading from '../img/loading.gif'
import IframeComponent from '../components/Iframe.js'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'

export const NewsPageTemplate = (
  //{}
) => (
  <section className="section section--gradient">

      <div
        className={'a-button-container'}>
        <a 
          className={'a-button'}
          href={'http://www.instagram.com/ika_editions'}
          target={'_blank'}
          rel={'noopener noreferrer'}>
          Follow us on Instagram!
        </a>
      </div>
      <div 
        className={'snapwidget-container'}
        >
        <div 
          style={{backgroundImage: `url(${loading})`}}
          className={'news-page-spinner'}>
          <IframeComponent />
        </div>
      </div>
      <div
       className={'a-button-container'}>
        <a 
          className={'a-button'}
          href={'http://www.instagram.com/ika_editions'}
          target={'_blank'}
          rel={'noopener noreferrer'}>
          Follow us on Instagram!
        </a>
      </div>
  </section>
)

NewsPageTemplate.propTypes = {

}

const NewsPage = ( /* { data } */ ) => {
 // const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <NewsPageTemplate
      />
    </Layout>
  )
}

NewsPage.propTypes = {
  // data: PropTypes.shape({
  //   markdownRemark: PropTypes.shape({
  //     frontmatter: PropTypes.object,
  //   }),
  // }),
}

export default NewsPage

// export const newsPageQuery = graphql`
//   query NewsPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
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
//         main {
//           heading
//           description
//           image1 {
//             alt
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 526, quality: 92) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//           image2 {
//             alt
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 526, quality: 92) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//           image3 {
//             alt
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 1075, quality: 72) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//         testimonials {
//           author
//           quote
//         }
//         full_image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         pricing {
//           heading
//           description
//           plans {
//             description
//             items
//             plan
//             price
//           }
//         }
//       }
//     }
//   }
// `