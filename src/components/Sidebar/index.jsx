import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

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
    paddingTop: 76,
    textDecoration: 'none'
  },
  link: {
    color: '#fff',
    padding: '0 16px 0 28px',
    fontSize: 13,
    transition: 'none',
    minHeight: 30,
    fontWeight: 100,
    lineHeight: '30px',
    textTransform: 'uppercase',
    listStyleType: 'none',
    '&:hover': {
      backgroundColor: '#8897aa',
      borderLeft: '4px solid #3da911',
      padding: '0 16px 0 24px',
    }
  },
  activeLink: {
    backgroundColor: '#8897aa',
    borderLeft: '4px solid #3da911',
    padding: '0 16px 0 24px',
  },
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
        {props.children.map((item, i) => {
          if (item.divider) {
            return <Divider className={classes.divider} />
          }

          const active = item.primaryText === 'Home' ? classes.activeLink : '';
          return (
            <li key={i} className={`${classes.link} ${active}`}>
              {item.primaryText}
            </li>
          );
        })}
      </div>
    </Drawer>
  );
};

export default withStyles(styles)(Sidebar);
