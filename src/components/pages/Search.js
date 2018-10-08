import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchTemplate from '../templates/SearchTemplate';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/search';
import '../../css/search.css';

class Search extends React.Component {
  render() {
    return (
      <div className="search__page">
        <SearchTemplate search={this.props} />
      </div>
    );
  }
}


Search.propTypes = {
  actions: PropTypes.shape({
    isTextEmpty: PropTypes.func.isRequired,
    hoverTextForm: PropTypes.func.isRequired,
    outTextForm: PropTypes.func.isRequired,
    hoverButtonForm: PropTypes.func.isRequired,
    outButtonForm: PropTypes.func.isRequired,
    confirmInput: PropTypes.func.isRequired,
  }),
  search: PropTypes.shape({
    params: PropTypes.shape({
      keyword: PropTypes.string,
      textClass: PropTypes.string,
      buttonClass: PropTypes.string,
      isConfirmed: PropTypes.boolean
    })
  })
};

const mapStateToProps = (state) => {
  const stateToProps = {
    store: {
      ...state.search
    }
  };
  return stateToProps;
};

const mapDispatchProps = (dispatch) => {
  const dispatchProps = {
    actions: bindActionCreators({
      ...actions,
    }, dispatch)
  };
  return dispatchProps;
};

export default connect(mapStateToProps, mapDispatchProps)(Search);
