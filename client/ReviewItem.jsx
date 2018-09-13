import React from 'react';

export default class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { review } = this.props;
    let item;
    if (review) {
      item = (
        <div>
          <b>{review.name}</b>
          <br />
          {' '}
          {review.review_text}
          {' '}
          <img src={review.image_url} alt="user" />
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
