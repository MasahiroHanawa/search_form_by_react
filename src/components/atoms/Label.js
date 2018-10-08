import React from 'react';

export default class Label extends React.Component {
  render () {
    return (
      <div className={this.props.className}>
        <label className={this.props.search.store.params.labelClass}>
          Thanks for searching with us
        </label>
      </div>
    );
  }
}
