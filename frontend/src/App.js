import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create_Todo from './components/create_todo';
import Delete_Todo from './components/delete_todo';
import Edit_Todo from './components/edit_todo';
import Todos_List from './components/todos_list';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <h2>MERN-Stack Todo App</h2>

          <Route path='/' exact component={Todos_List} />
          <Route path='/edit/:id' component={Edit_Todo} />
          <Route path='/create' component={Create_Todo} />
          <Route path='/delete/:id' component={Delete_Todo} />
        </div>
      </Router>
    );
  }
}

export default App;
