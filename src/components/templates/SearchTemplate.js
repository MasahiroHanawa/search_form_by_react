import React from 'react';
import SearchArea from '../organisms/SearchArea';
import Header from '../organisms/Header';

export default class SearchTemplate extends React.Component {
  render () {
    return (
      <div className="search__template" id="view-point">
        <Header />
        <SearchArea search={this.props.search} />
      </div>
    );
  }
}

