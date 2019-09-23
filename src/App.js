import React, { Component } from 'react';
import './App.css';
import GoalEntry from './GoalEntry';
import List from './List';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items1: [],
      items6: [],
      itemrollup: []
    };
  }

  // onChange = (event) => {
  //   this.setState({ term: event.target.value });
  // }

  // onSubmit = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     items: [...this.state.items, this.state.term]
  //   });
  // }

  onSelectNav = (eventKey, event) => {
    console.log("onSelect triggered:")
    console.log(eventKey);
    console.log(eventKey);
  }

  render() {
    return (
      <div className="container">
        <SideNav onSelect={this.onSelectNav}>
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>              
            <NavItem eventKey="charts">
                <NavIcon>
                    <i className="fa fa-fw fa-charts" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Charts
                </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <div className="container">
          <GoalEntry title="Monthly Goals:" items={this.state.items1} />
          <GoalEntry title="6-Month Goals:" items={this.state.items6} />
        </div>  
        <div className="main-container">
          <List title="All Goals:" items={this.state.itemrollup} />
        </div>       
      </div>
    );
  }
}