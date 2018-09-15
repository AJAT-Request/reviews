import React from 'react';
import moment from 'moment';
import { Image, ListGroupItem } from 'react-bootstrap';
// import styles from './styles.css';

export default class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { review } = this.props;
    const date = moment(review.date_posted).format('MMMM YYYY');
    let item;
    if (review) {
      item = (
        <div>
          <ListGroupItem>
            <Image src={review.image_url} circle style={{ width: 30 }} alt={review.name} />
            {' '}
            <b>{review.name}</b>
            <br />
            {date}
            <br />
            {review.review_text}
          </ListGroupItem>
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
