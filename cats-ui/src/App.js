import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import IdeaList from './components/IdeaList'

class App extends Component {

async componentWillMount() {
    try {
        const response = await axios.get('/')      //cats
        this.setState({ ideas: response.data })
    } catch (error) {
        console.log('Error retrieving ideas!')
        console.log(error)
    }
}

  render() {
    return (
      <div>
        <IdeaList />
      </div>
    )
  }
}

export default App

