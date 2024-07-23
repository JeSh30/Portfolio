import React, { Component } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Skills from './components/Skill';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

class App extends Component {
  state = {
    selectedTab: 'about'
  };

  tabSelecting = (tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab } = this.state;
    return (
      <div>
        <Header onSelectedTab={this.tabSelecting} selectedTab={selectedTab} /> {/* Pass tabSelecting function and selectedTab state */}
        {selectedTab === 'about' ? <Home /> : null}
        {selectedTab === 'projects' ? <Projects /> : null}
        {selectedTab === 'skills' ? <Skills /> : null}
        {selectedTab === 'contact' ? <Contact /> : null}
      </div>
    );
  }
}

export default App;
