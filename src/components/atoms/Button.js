import React from 'react';

export default class Button extends React.Component {
  render () {
    return (
      <div>
        <input
          type="button"
          className={this.props.search.store.params.buttonClass}
          value={this.props.value}
          onMouseOver={() => this.props.search.actions.hoverButtonForm()}
          onMouseOut={() => this.props.search.actions.outButtonForm()}
          onClick={() => this.props.search.actions.confirmInput()}
        />
      </div>
    );
  }
}
