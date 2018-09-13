import React from 'react';
import { Link } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import ExitToApp from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Logo from '../../../docs/defi-logo.png';

const styles = theme => ({
  button: {
    textTransform: 'none',
    color: 'white',
  },
  toolbar: {
    backgroundColor: '#334058',
    height: 68,
  },
  appBar: {
    position: 'fixed',
    width: '100%',
    zIndex: 1500,
  },
  white: {
    color: 'white',
  },
  flexer: {
    flex: '1 1 auto',
  },
  img: {
    width: 170,
    marginTop: 7,
  },
});

const DefiHeader = (props) => {
  const { classes } = props;

  const renderLogo = () => {
    const timestamp = props.clientLastUpdated ? `?${props.clientLastUpdated}` : '';
    const url = `/Home/GetLogo${timestamp}`;

    return <img src={Logo} alt="logo" className={classes.img} />;
  };

  // const renderLinks = () => (
  //   <Grid item>
  //     <Button className={classes.button} href="/ui/login/change-password">
  //       Change Password
  //     </Button>
  //     <Button className={classes.button} href="/Home/ConfigurationNormal">
  //       Configuration
  //     </Button>
  //     <IconButton aria-label="Logout" onClick={() => Auth.logout()}>
  //       <ExitToApp className={classes.white} />
  //     </IconButton>
  //   </Grid>
  // );

  const renderMenu = () => {
    return (
      <Grid item data-testid="menuIcon">
        <IconButton className={classes.menuButton} onClick={() => props.toggleSidebar()} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
      </Grid>
    );
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={16} justify="center">
          {renderMenu()}
          <Grid item>
            <a id="logoLink" href="/">
              {renderLogo()}
            </a>
          </Grid>
          <Grid item className={classes.flexer} />
          {/* {renderLinks()} */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(DefiHeader);
