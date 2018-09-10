import React from 'react';
import ReviewItem from './ReviewItem.jsx';


export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { users } = this.props;
    const listItems = users.map(user => (
      <ReviewItem user={user} />
    ));
    return (
      <div>
        { listItems }
        <ReviewItem />
      </div>
    );
  }
}
