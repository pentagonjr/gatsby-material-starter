import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import getNavList from '../../utils/getNavList';

const styles = theme => ({
  content: {
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
    flex: 1,
    paddingTop: 68,
  },
  pushed: {
    marginLeft: 300,
  },
});

const mql = typeof window !== 'undefined' ? window.matchMedia(`(min-width: 960px)`) : {};

class Navigation extends Component {
  state = {
    open: true,
    mql,
  }

  componentDidMount() {
    mql.addListener(this.setMediaData);
    this.setMediaData();
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.setMediaData);
  }

  setMediaData = () => {
    this.setState({
      mql: mql,
      open: mql.matches,
    });
  }

  toggleSidebar = bool => {
    if (bool === undefined) {
      return this.setState({ open: !this.state.open });
    }

    return this.setState({ open: bool });
  }

  render() {
    const { children, localTitle, config, classes } = this.props;
    const { open, mql } = this.state;
    const footerLinks = localTitle !== "About";
    const contentPush = open && mql.matches ? classes.pushed : '';

    return (
      <div>
        <Header toggleSidebar={this.toggleSidebar} />
        <Sidebar open={open}>
          {getNavList(config)}
        </Sidebar>
        <div className={`${classes.content} ${contentPush}`}>{children}</div>
        {/* <Footer userLinks={footerLinks} /> */}
      </div>
    );
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
//     <Footer />
//   </NavigationDrawer>
// );
