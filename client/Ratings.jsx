import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { RatingsContainer, RatingsLeftContainer, RatingsRightContainer, RatingStars } from './styles.js';

library.add(faStar, faStarHalfAlt);

export default class Ratings extends React.Component {
  static intToStars(rating) {
    let stars = [...Array(Math.floor(rating))].map(() => <RatingStars><FontAwesomeIcon icon="star" /></RatingStars>);
    if (rating.toString().length > 1) {
      stars = stars.concat(<RatingStars><FontAwesomeIcon icon="star-half-alt" /></RatingStars>);
    }
    return stars;
  }

  constructor(props) {
    super(props);
    this.state = {
      accuracyAvg: '',
      communicationAvg: '',
      cleanlinessAvg: '',
      locationAvg: '',
      checkinAvg: '',
      valueAvg: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { reviews } = this.props;
    if (reviews !== prevProps.reviews) {
      const roundHalf = num => Math.round(num * 2) / 2;
      if (reviews.length > 0) {
        let accuracySum = 0;
        for (let i = 0; i < reviews.length; i += 1) {
          accuracySum += reviews[i].accuracy_rating;
        }
        let communicationSum = 0;
        for (let i = 0; i < reviews.length; i += 1) {
          communicationSum += reviews[i].communication_rating;
        }
        let cleanlinessSum = 0;
        for (let i = 0; i < reviews.length; i += 1) {
          cleanlinessSum += reviews[i].cleanliness_rating;
        }
        let locationSum = 0;
        for (let i = 0; i < reviews.length; i += 1) {
          locationSum += reviews[i].location_rating;
        }
        let checkinSum = 0;
        for (let i = 0; i < reviews.length; i += 1) {
          checkinSum += reviews[i].checkin_rating;
        }
        let valueSum = 0;
        for (let i = 0; i < reviews.length; i += 1) {
          valueSum += reviews[i].value_rating;
        }
        this.setState({
          accuracyAvg: roundHalf(accuracySum / reviews.length),
          communicationAvg: roundHalf(communicationSum / reviews.length),
          cleanlinessAvg: roundHalf(cleanlinessSum / reviews.length),
          locationAvg: roundHalf(locationSum / reviews.length),
          checkinAvg: roundHalf(checkinSum / reviews.length),
          valueAvg: roundHalf(valueSum / reviews.length),
        });
      }
    }
  }

  render() {
    const {
      accuracyAvg, communicationAvg, cleanlinessAvg,
      locationAvg, checkinAvg, valueAvg
    } = this.state;
    const stars = Ratings.intToStars(4);
    console.log(stars);

    return (
      <div>
        <RatingsContainer>
          <RatingsLeftContainer>
            Accuracy
            {' '}
            {Ratings.intToStars(accuracyAvg)}
            <br />
            Communication
            {' '}
            {Ratings.intToStars(communicationAvg)}
            <br />
            Cleanliness
            {' '}
            {Ratings.intToStars(cleanlinessAvg)}
            <br />
          </RatingsLeftContainer>
          <RatingsRightContainer>
            Location
            {' '}
            {Ratings.intToStars(locationAvg)}
            <br />
            Check-in
            {' '}
            {Ratings.intToStars(checkinAvg)}
            <br />
            Value
            {' '}
            {Ratings.intToStars(valueAvg)}
          </RatingsRightContainer>
        </RatingsContainer>
      </div>
    );
  }
}
