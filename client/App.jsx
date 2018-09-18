import React from 'react';
import $ from 'jquery';
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';
import {
  Container, HeaderContainer, TotalReviews, SearchBox,
} from './styles.js'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
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

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <Container>
          <HeaderContainer>
            <TotalReviews>
              <b>
                { reviews.length }
                {' '}
              Reviews
              </b>
            </TotalReviews>
            <SearchBox>
              <Search />
            </SearchBox>
          </HeaderContainer>
          <Ratings reviews={reviews} />
          <ReviewList reviews={reviews} />
        </Container>
      </div>
    );
  }
}
