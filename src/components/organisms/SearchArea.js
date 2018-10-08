import React from 'react';
import SearchUnit from '../molecules/SearchUnit';

export default class SearchArea extends React.Component {
  render () {
    return (
      <div>
        <SearchUnit search={this.props.search} />
      </div>
    );
  }
}
