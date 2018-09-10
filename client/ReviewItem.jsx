import React from 'react';

export default class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;
    let item;
    if (user) {
      item = (
        <div>
          {user.name}
          {' '}
          {user.date}
          {' '}
          {user.message}
        </div>
      );
    }
    return (
      <div>
        {item}
      </div>
    );
  }
}
