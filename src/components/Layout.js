import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import favicon16 from '../img/favicon-16x16.png';
import favicon32 from '../img/favicon-32x32.png';
import ikaSafariPinnedTab from '../img/safari-pinned-tab.png';
import ikaAppleTouchIcon from '../img/apple-touch-icon.png';
import ikaImageOg from '../img/ika-image-og.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/all.sass';

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name={'description'}
            content={data.site.siteMetadata.description}
          />
          <link
            rel={'apple-touch-icon'}
            sizes={'180x180'}
            href={ikaAppleTouchIcon}
          />
          <link
            rel={'icon'}
            type={'image/png'}
            href={favicon32}
            sizes={'32x32'}
          />
          <link
            rel={'icon'}
            type={'image/png'}
            href={favicon16}
            sizes={'16x16'}
          />

          <link rel={'mask-icon'} href={ikaSafariPinnedTab} color={'#ff4400'} />
          <meta name={'theme-color'} content={'#fff'} />
          <meta property={'og:type'} content={'business.business'} />
          <meta property={'og:title'} content={data.site.siteMetadata.title} />
          <meta property={'og:url'} content={'/'} />
          <meta property={'og:image'} content={ikaImageOg} />
        </Helmet>
        <Navbar />
        <div className={'footer-margin'}>{children}</div>
        <Footer />
      </div>
    )}
  />
);

export default TemplateWrapper;
