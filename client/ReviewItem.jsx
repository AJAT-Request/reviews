import React from 'react';
import moment from 'moment';
import { Image } from 'react-bootstrap';
import { ListItem, ReviewProfileImage, ListItemHeader, NameAndDateContainer, ProfileImageContainer, NameText, DateText } from './styles.js'

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
          <ListItem>
            <ListItemHeader>
              <ProfileImageContainer>
                <ReviewProfileImage src={review.image_url} circle alt={review.name} />
              </ProfileImageContainer>
              <NameAndDateContainer>
                <NameText>{review.name}</NameText>
                <DateText>{date}</DateText>
              </NameAndDateContainer>
            </ListItemHeader>
            {review.review_text}
          </ListItem>
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
