import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import IconSeparator from 'react-md/lib/Helpers/IconSeparator';
import { Follow } from 'react-twitter-widgets';
import './UserInfo.scss';

class UserInfo extends Component {
  render() {
    const { userAvatar, userName, userLocation, userDescription, userTwitter } = this.props.config;
    const { expanded } = this.props;
    if (!userAvatar && !userName && !userLocation && !userDescription) {
      return null;
    }
    return (
      <Card className="md-grid md-cell md-cell--12 user-info">
        <CardTitle
          expander={!expanded}
          avatar={userAvatar && <Avatar src={userAvatar} role="presentation" />}
          title={userName && userName}
          subtitle={
            userTwitter ? (
              <Follow username={userTwitter} options={{ count: expanded ? 'none' : 'none' }} />
            ) : (
              'Author'
            )
          }
        />
        <CardText expandable={!expanded}>
          {userLocation && (
            <IconSeparator label={userLocation} iconBefore>
              <FontIcon iconClassName="fa fa-map-marker" />
            </IconSeparator>
          )}
          <p>{userDescription && userDescription}</p>
        </CardText>
      </Card>
    );
  }
}

export default UserInfo;
