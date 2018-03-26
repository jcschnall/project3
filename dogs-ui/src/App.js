import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import IdeaList from './components/IdeaList'
import DetailsList from './components/DetailList'

class App extends Component {

async componentWillMount() {
    try {
        const response = await axios.get('/')      //Dogs
        this.setState({ ideas: response.data })
    } catch (error) {
        console.log('Error retrieving ideas!')
        console.log(error)
    }
}

  render() {
    if(window.location.pathname == '/Dogs' ){
    return (
      <div>
        <IdeaList />
      </div>
    )}
    else{
    return(
      <div>
        <DetailsList />
      </div>
    )}
  }
}

export default App

