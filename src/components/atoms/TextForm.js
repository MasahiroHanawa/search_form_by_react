import React from 'react';

export default class TextForm extends React.Component {
  render () {
    return (
      <div>
        <input
          type="text"
          className={this.props.search.store.params.textClass}
          value={this.props.search.store.params.keyword}
          placeholder={this.props.placeholder}
          onChange={(e) => this.props.search.actions.isTextEmpty(e.target.value)}
          onMouseOver={() => this.props.search.actions.hoverTextForm()}
          onMouseOut={() => this.props.search.actions.outTextForm()}
        />
      </div>
    );
  }
}
