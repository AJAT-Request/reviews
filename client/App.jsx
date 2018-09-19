import React from 'react';
import $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';
import { Container, HeaderContainer, TotalReviews, TotalReviewsText, HeaderRatingStars, Star, SearchBox } from './styles.js'

library.add(faStar, faStarHalfAlt);

export default class App extends React.Component {
  static intToStars(rating) {
    let stars = [...Array(Math.floor(rating))].map(() => <Star><FontAwesomeIcon icon="star" /></Star>);
    if (rating.toString().length > 1) {
      stars = stars.concat(<Star><FontAwesomeIcon icon="star-half-alt" /></Star>);
    }
    return stars;
  }

  constructor() {
    super();
    this.updateTotalAvgRating = this.updateTotalAvgRating.bind(this);
    this.state = {
      reviews: [],
      totalAvgRating: '',
    };
  }

  componentDidMount() {
    const id = window.location.pathname.slice(7);
    $.ajax({
      url: `http://localhost:3000/reviews/?${id}`,
      data: id,
      success: (data) => {
        const parsedData = JSON.parse(data);
        this.setState({ reviews: parsedData }, () => {
          console.log(this.state);
        });
      },
    });
  }

  updateTotalAvgRating(number) {
    this.setState({ totalAvgRating: number });
  }

  render() {
    const { reviews, totalAvgRating } = this.state;
    return (
      <div>
        <Container>
          <HeaderContainer>
            <TotalReviews>
              <b>
                <TotalReviewsText>
                  { reviews.length }
                  {' '}
                  Reviews
                </TotalReviewsText>
              </b>
              <HeaderRatingStars>
                {App.intToStars(totalAvgRating)}
              </HeaderRatingStars>
            </TotalReviews>
            <SearchBox>
              <Search />
            </SearchBox>
          </HeaderContainer>
          <Ratings
            reviews={reviews}
            updateTotalAvgRating={this.updateTotalAvgRating}
            intToStars={App.intToStars}
          />
          <ReviewList reviews={reviews} />
        </Container>
      </div>
    );
  }
}
