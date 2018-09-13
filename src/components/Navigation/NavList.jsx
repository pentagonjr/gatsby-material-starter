import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import { Link } from 'gatsby';

function GetNavList(config) {
  const NavList = [
    {
      primaryText: 'Home',
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: '/',
    },
    {
      divider: true,
    },
  ];

  NavList.push({ divider: true });

  NavList.push({
    primaryText: 'About',
    leftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: '/about/',
  });
  return NavList;
}
export default GetNavList;
