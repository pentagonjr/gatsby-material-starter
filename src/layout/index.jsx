import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import Navigation from "../components/Navigation";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";
import withRoot from './withRoot';

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    // return (
    //   <Navigation config={config} LocalTitle={this.props.title}>
    //     <div>
    //       <Helmet>
    //         <meta name="description" content={config.siteDescription} />
    //       </Helmet>
    //       {children}
    //     </div>
    //   </Navigation>
    // );

    return (
      <Navigation config={config} localTitle={this.props.title}>
        <div>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          {children}
        </div>
      </Navigation>
    )
  }
}

export default withRoot(MainLayout);
