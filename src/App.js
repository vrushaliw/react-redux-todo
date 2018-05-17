import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar'
import AddRecord from './components/AddRecord'
import { Provider } from 'react-redux'
import todoApp from './reducers/todo'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  todoApp,
  applyMiddleware(
    thunkMiddleware
  )
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NavigationBar/>
        <AddRecord />
        <div id="Index"></div>
      </div>
    </Provider>
    );
  }
}

export default App;
export { store };
