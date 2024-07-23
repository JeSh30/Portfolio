import React, { Component } from 'react';
import './index.css';

class Header extends Component {
  handleTabClick = (tabName) => {
    this.props.onSelectedTab(tabName); // Call the function passed via props
  };

  render() {
    const { selectedTab } = this.props; // Access selectedTab from props

    return (
      <div className="header-container">
        <div className="left-nav-container">
          {/* <img src={`${process.env.PUBLIC_URL}/ar_logo.jpg`} className="portfolio-logo" alt="logo" /> */}
          <h1 className="portfolio-logo" onClick={() => this.handleTabClick('about')}> AR </h1>
        </div>
        <div className="right-nav-container">
          <p className={selectedTab === 'about' ? 'nav-tab active' : 'nav-tab'} onClick={() => this.handleTabClick('about')}>
            About Me
          </p>
          <p className={selectedTab === 'skills' ? 'nav-tab active' : 'nav-tab'} onClick={() => this.handleTabClick('skills')}>
            Skills
          </p>
          <p className={selectedTab === 'projects' ? 'nav-tab active' : 'nav-tab'} onClick={() => this.handleTabClick('projects')}>
            Projects
          </p>
          <p className={selectedTab === 'contact' ? 'nav-tab active' : 'nav-tab'} onClick={() => this.handleTabClick('contact')}>
            Contact Me
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
