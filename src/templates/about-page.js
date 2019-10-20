import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Img from 'gatsby-image'

export const AboutPageTemplate = ({ 
  title, 
  image, 
  content, 
  contentComponent 
}) => {
  const PageContent = contentComponent || Content
  return (
    <section>
      <div
        className={'landing-image'}
        style={{
          // backgroundImage: `url(${
          //   !!image.childImageSharp
          //     ? image.childImageSharp.fluid.src
          //     : image
          // })`,
          // backgroundPosition: `10%`
        }}
        >
          <Img 
            fluid={!!image.childImageSharp ? 
                      image.childImageSharp.fluid : 
                      image}
            style={{
              position: 'static'
            }}
            alt={'Ika About Page Cover'} /> 
      </div>
      {/* <h4 className={'section-class'}>
        {title}
      </h4> */}
      <PageContent className={'about-container'} content={content} />
      <div className={'google-maps-container'}>
        <iframe 
          className={'google-maps-iframe'}
          title={'google-maps-iframe'}
          src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.899568772054!2d2.156959215197784!3d41.39798737926315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a296855fe531%3A0xa2e24fe3d1c282cf!2sIKA!5e0!3m2!1ses!2ses!4v1555941780833!5m2!1ses!2ses'}
          style={{border: '0'}} />
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  const title = data.site.siteMetadata.title

  return (
    <Layout>
      <Helmet title={`${title} | ${post.frontmatter.title}`} />
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
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
`
