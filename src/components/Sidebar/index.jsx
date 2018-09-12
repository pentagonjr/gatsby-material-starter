import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const styles = theme => ({
  drawer: {
    position: 'relative',
    '& > div': {
      backgroundColor: '#97a7bd',
      boxShadow: 'rgba(0, 0, 0, 0.14) 0px 1px 6px',
      borderRight: 0,
    }
  },
  sidebar: {
    width: 300,
  }
});

const Sidebar = (props) => {
  const { classes } = props;

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={props.open}
      className={classes.drawer}
    >
      <div className={classes.sidebar}>

      </div>
    </Drawer>
  );
};

export default withStyles(styles)(Sidebar);
