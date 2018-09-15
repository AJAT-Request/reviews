import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ReviewItem from './ReviewItem.jsx';
import PaginationBar from './PaginationBar.jsx'

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      currentPage: 1,
    };
  }

  handlePageChange(button) {
    const { reviews } = this.props;
    const { currentPage } = this.state;
    if (button === 'prev') {
      if (currentPage !== 1) {
        this.setState(state => ({
          currentPage: state.currentPage - 1,
        }));
      }
    } else if (button === 'next') {
      if (currentPage !== Math.ceil(reviews.length / 7)) {
        this.setState(state => ({
          currentPage: state.currentPage + 1,
        }));
      }
    } else {
      this.setState({ currentPage: Number(button) }, () => {
        console.log(this.state);
      });
    }
  }

  render() {
    const { reviews } = this.props;
    const { currentPage } = this.state;
    // breaking reviews array down into smaller arrays of length 7 for pagination
    const masterArray = [];
    let counter = 0;
    let tempArray = [];
    for (let i = 0; i < reviews.length; i += 1) {
      if (counter !== 7) {
        tempArray.push(reviews[i]);
        if (i === reviews.length - 1) {
          masterArray.push(tempArray);
        } else {
          counter += 1;
        }
      } else if (counter === 7) {
        masterArray.push(tempArray);
        tempArray = [reviews[i]];
        counter = 1;
      }
    }
    let listItems;
    if (masterArray[0] !== undefined) {
      listItems = masterArray[currentPage - 1].map(review => (
        <ReviewItem key={review.id} review={review} />
      ));
    } else {
      listItems = 'Loading...';
    }
    return (
      <div>
        <ListGroup>
          { listItems }
        </ListGroup>
        <PaginationBar
          reviews={reviews}
          handlePageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </div>
    );
  }
}
