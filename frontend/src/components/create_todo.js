import React, { Component } from 'react';

export default class Create_todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_startdate: '',
      todo_completeddate: '',
      todo_completed: false
    };
  }

  render() {
    return (
      <div>
        <p>Welcome to Create Todo Component!!</p>
      </div>
    );
  }
}
