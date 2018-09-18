import React from 'react';
import { Pagination } from 'react-bootstrap';

export default class PaginationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { reviews, handlePageChange, currentPage } = this.props;
    const totalPages = Math.ceil(reviews.length / 7);
    let previous;
    if (currentPage !== 1) {
      previous = <Pagination.Prev onClick={() => { handlePageChange('prev'); }} />;
    }
    let next;
    if (currentPage !== totalPages) {
      next = <Pagination.Next onClick={() => { handlePageChange('next'); }} />;
    }
    const pagination = [...Array(totalPages)].map((x, i) => (
      <Pagination.Item
        key={i + 1}
        active={i + 1 === currentPage}
        id={i + 1}
        onClick={(e) => { handlePageChange(e.target.id); }}
      >
        {i + 1}
      </Pagination.Item>));
    return (
      <Pagination>
        {previous}
        {pagination}
        {next}
      </Pagination>
    );
  }
}

// export default const PaginationBar = ({ reviews, handlePageChange, currentPage }) => {
//   const totalPages = Math.ceil(reviews.length / 7);
//   const pagination = [...Array(totalPages)].map((x, i) => (
//     <Pagination.Item
//       key={i + 1}
//       active={i + 1 === currentPage}
//       id={i + 1}
//       onClick={(e) => { handlePageChange(e.target.id); }}
//     >
//       {i + 1}
//     </Pagination.Item>));
//   return (
//     <Pagination>
//       <Pagination.Prev onClick={() => { handlePageChange('prev'); }} />
//       {pagination}
//       <Pagination.Next onClick={() => { handlePageChange('next'); }} />
//     </Pagination>
//   );
// };
