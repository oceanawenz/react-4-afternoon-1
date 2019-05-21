import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
      this.state = {
        students: []
      }
  }

// match is an object with useful info
// params is a property of match- it is the value of any route parameters
// class is the route parameter
  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(results => {
    this.setState({
    students: results.data
      })
  })
}




  render() {
    const students = this.state.students.map((student, i ) => (
      <Link to={`/student/${student.id}`} key={i}>
       <h3>{ student.first_name } { student.last_name}</h3>
      </Link>
    ))
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        { students }

      </div>
    )
  }
}