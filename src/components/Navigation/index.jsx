import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Footer from "../Footer";
import Header from '../Header';
import Sidebar from '../Sidebar';

const styles = theme => ({
  content: {
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
    flex: 1,
  },
  pushed: {
    marginLeft: 240,
  }
})

class Navigation extends Component {
  state = {
    open: true,
  }

  toggleSidebar = (bool) => {
    if (bool === undefined) {
      return this.setState({ open: !this.state.open });
    }

    return this.setState({ open: bool });
  }

  render() {
    const { children, LocalTitle, classes } = this.props;
    const footerLinks = LocalTitle !== "About";

    const contentPush = this.state.open ? classes.pushed : '';

    return (
      <div>
        <Header toggleSidebar={this.toggleSidebar} />
        <Sidebar open={this.state.open} />
        <div className={`${classes.content} ${contentPush}`}>{children}</div>
        <Footer userLinks={footerLinks} />
      </div>
    )
  }
}

export default withStyles(styles)(Navigation);

  // return (
  //   <NavigationDrawer
  //     drawerTitle={config.siteTitle}
  //     toolbarTitle={LocalTitle}
  //     contentClassName="main-content"
  //     navItems={GetNavList(config)}
  //     mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
  //     tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
  //     desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
  //     toolbarActions={<ToolbarActions config={config} />}
  //   >
  //     <div className="main-container">{children}</div>
  //     <Footer userLinks={footerLinks} />
  //   </NavigationDrawer>
  // );