import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

export const ShopPageTemplate = () => (
  <section className="section section--gradient">
    <h3 className={'section-class'}>Coming Soon...</h3>
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
