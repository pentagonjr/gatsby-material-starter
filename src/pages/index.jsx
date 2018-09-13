import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import Home from '../components/Home';
import config from '../../data/SiteConfig';

class Index extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="About">
        <div className="home-container">
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
          <Home />
        </div>
      </Layout>
    );
  }
}

export default Index;
