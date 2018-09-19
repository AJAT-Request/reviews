import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { RatingsContainer, RatingsLeftContainer, RatingsRightContainer, RatingTextAndStarsContainer, RatingText, RatingStars } from './styles.js';

export default class Ratings extends React.Component {
  // static intToStars(rating) {
  //   let stars = [...Array(Math.floor(rating))].map(() => <RatingStars><FontAwesomeIcon icon="star" /></RatingStars>);
  //   if (rating.toString().length > 1) {
  //     stars = stars.concat(<RatingStars><FontAwesomeIcon icon="star-half-alt" /></RatingStars>);
  //   }
  //   return stars;
  // }

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
    const { updateTotalAvgRating } = this.props;
    if (reviews !== prevProps.reviews) {
      const roundHalf = n => Math.round(n * 2) / 2;
      let totalAvgRating = 0;
      const ratings = ['accuracy_rating', 'communication_rating', 'cleanliness_rating', 'location_rating', 'checkin_rating', 'value_rating'];
      for (let i = 0; i < ratings.length; i += 1) {
        let sum = 0;
        for (let x = 0; x < reviews.length; x += 1) {
          sum += reviews[x][ratings[i]];
        }
        totalAvgRating += (sum / reviews.length);
        const stateProp = Object.keys(this.state)[i];
        this.setState({ [stateProp]: roundHalf(sum / reviews.length) });
      }
      updateTotalAvgRating(roundHalf(totalAvgRating / 6));
    }
  }

  render() {
    const {
      accuracyAvg, communicationAvg, cleanlinessAvg,
      locationAvg, checkinAvg, valueAvg
    } = this.state;
    const { intToStars } = this.props;
    return (
      <div>
        <RatingsContainer>
          <RatingsLeftContainer>
            <RatingTextAndStarsContainer>
              <RatingText>Accuracy</RatingText>
              <RatingStars>{intToStars(accuracyAvg)}</RatingStars>
              <br />
            </RatingTextAndStarsContainer>
            <RatingTextAndStarsContainer>
              <RatingText>Communication</RatingText>
              <RatingStars>{intToStars(communicationAvg)}</RatingStars>
              <br />
            </RatingTextAndStarsContainer>
            <RatingTextAndStarsContainer>
              <RatingText>Cleanliness</RatingText>
              <RatingStars>{intToStars(cleanlinessAvg)}</RatingStars>
              <br />
            </RatingTextAndStarsContainer>
          </RatingsLeftContainer>
          <RatingsRightContainer>
            <RatingTextAndStarsContainer>
              <RatingText>Location</RatingText>
              <RatingStars>{intToStars(locationAvg)}</RatingStars>
              <br />
            </RatingTextAndStarsContainer>
            <RatingTextAndStarsContainer>
              <RatingText>Check-in</RatingText>
              <RatingStars>{intToStars(checkinAvg)}</RatingStars>
              <br />
            </RatingTextAndStarsContainer>
            <RatingTextAndStarsContainer>
              <RatingText>Value</RatingText>
              <RatingStars>{intToStars(valueAvg)}</RatingStars>
            </RatingTextAndStarsContainer>
          </RatingsRightContainer>
        </RatingsContainer>
      </div>
    );
  }
}
