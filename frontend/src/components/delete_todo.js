import React, { Component } from 'react';
import axios from 'axios';

class Delete_todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    };
  }

  render() {
    return (
      <div>
        <p>Welcome to Delete Todo Component!!</p>
      </div>
    );
  }
}
export default Delete_todo;
