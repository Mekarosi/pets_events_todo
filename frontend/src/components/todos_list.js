import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Todos_list extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className='table table-striped' style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Start Date</th>
              <th>Intended Completion Date</th>
              <th>Edit Todo</th>
              <th>Delete Todo</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}
export default Todos_list;
