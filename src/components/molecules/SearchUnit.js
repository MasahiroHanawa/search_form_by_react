import React from 'react';
import TextForm from '../atoms/TextForm';
import Button from '../atoms/Button';
import Label from '../atoms/Label';

export default class SearchUnit extends React.Component {
  render () {
    let label = null;
    if (this.props.search.store.params.isConfirmed) {
      label = <Label
        search={this.props.search}
        className="clear search__message_box"
      />
    }
    return (
      <div>
        <div>
          <TextForm
            search={this.props.search}
            placeholder='Enter a word'
          />
          <Button
            search={this.props.search}
            value="Search"
          />
        </div>
        {label}
      </div>
    );
  }
}
