import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

export const ShopPageTemplate = () => (
  <section className="section-class">
    <div className={'container-text container-button'}>
      <a className="btn" href="https://ika-editions.myshopify.com">
        <h3>
          <strong>S H O P</strong>
        </h3>
      </a>
    </div>
  </section>
);

const ShopPage = () => {
  return (
    <Layout>
      <ShopPageTemplate />
    </Layout>
  );
};

ShopPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ShopPage;
