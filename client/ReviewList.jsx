import React from 'react';
import ReviewItem from './ReviewItem.jsx';


export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { reviews } = this.props;
    const listItems = reviews.map(review => (
      <ReviewItem review={review} />
    ));
    return (
      <div>
        { listItems }
        <ReviewItem />
      </div>
    );
  }
}
