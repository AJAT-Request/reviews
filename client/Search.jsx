import React from 'react';
import { SearchInput } from './styles.js'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SearchInput placeholder="Search reviews" />
    );
  }
}
