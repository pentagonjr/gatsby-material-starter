import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import Navigation from "../components/Navigation";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';
const theme = createMuiTheme();

export default class MainLayout extends React.Component {
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
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation config={config} localTitle={this.props.title}>
          <div>
            <Helmet>
              <meta name="description" content={config.siteDescription} />
            </Helmet>
            {children}
          </div>
        </Navigation>
      </MuiThemeProvider>
    )
  }
}
