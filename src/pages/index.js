import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import logo from '../assets/images/web-icon.png'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Climate Action Ilkley</h2>
                </header>
                <p>A local campaign group with the full suport of the town council.
                  We can take action together to tackle climate change and make a just transition to become a sustainable zero carbon community. Working together with the community of Ilkley we can develop proposals leading to the implementation of detailed initiatives to address climate change locally.
                  Climate change is personal.
                  It's our kids, our grandchildren, our community.
                  It’s everyone. Everywhere. We need to take action together. <b>Now</b>.</p>
                <ul className="actions">
                  <li><Link to="/about" className="button">Learn More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={logo} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>What We All Need To Understand</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>It's Warming</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>It's Us</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>We're Sure</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>It's Bad</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
              <li>
                <span className="icon major style4 fa-diamond"></span>
                <h3>We Can Fix It</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/basics" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Current Projects</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/projects" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="events" className="main special">
            <header className="major">
              <h2>Upcoming Events</h2>
              <p>Check out what events we have on<br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <ul className="actions">
              <li><Link to="/events" className="button">Learn More</Link></li>
            </ul>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Get Involved</h2>
              <p>Join Climate Action Ilkley and find out how you can help<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/getinvolved" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index