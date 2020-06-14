import React from 'react';
import Layout from '../components/Layout';
import loading from '../img/loading.gif';
import IframeComponent from '../components/Iframe.js';

export const NewsPageTemplate = () => (
  <section className="section section--gradient">
    <div className={'a-button-container'}>
      <a
        className={'a-button'}
        href={'http://www.instagram.com/ika_editions'}
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        Follow us on Instagram!
      </a>
    </div>
    <div className={'snapwidget-container'}>
      <div
        style={{ backgroundImage: `url(${loading})` }}
        className={'news-page-spinner'}
      >
        <IframeComponent />
      </div>
    </div>
    <div className={'a-button-container'}>
      <a
        className={'a-button'}
        href={'http://www.instagram.com/ika_editions'}
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        Follow us on Instagram!
      </a>
    </div>
  </section>
);

NewsPageTemplate.propTypes = {};

const NewsPage = () => {
  return (
    <Layout>
      <NewsPageTemplate />
    </Layout>
  );
};

NewsPage.propTypes = {};

export default NewsPage;
