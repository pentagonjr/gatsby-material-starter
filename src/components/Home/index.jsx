import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import config from '../../../data/SiteConfig';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="home-wrapper">
            <img src={config.userAvatar} className="about-img" alt={config.userName} />
            <CardText>
              <p className="about-text md-body-1">{config.userDescription}</p>
            </CardText>
          </div>
        </Card>
      </div>
    );
  }
}

export default Home;
