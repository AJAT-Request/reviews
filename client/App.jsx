import React from 'react';
import $ from 'jquery';
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3000/users',
      success: (data) => {
        this.setState({ users: data.data });
      },
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h2>
          { users.length }
          {' '}
          Reviews
        </h2>
        <Search />
        <Ratings />
        <ReviewList users={users} />
      </div>
    );
  }
}
