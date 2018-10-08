import * as constants from '../utils/constants';
import _ from 'lodash';

const initialState = {
  params: {
    keyword: '',
    textClass: 'search__form_text',
    buttonClass: 'search__form_button',
    labelClass: 'search__message',
    isConfirmed: false,
  }
};

export default function search(state = initialState, action) {
  let textClass = '';
  let buttonClass = '';
  let keyword = '';
  switch (action.type) {
    case constants.IS_TEXT_EMPTY:
      keyword = action.keyword;
      if (_.isEmpty(action.keyword)) {
        textClass = 'search__form_text';
      } else {
        textClass = 'search__form_text search__form_text_active';
      }
      return {
        params: {
          keyword: keyword,
          textClass: textClass,
          buttonClass: state.params.buttonClass,
          labelClass: state.params.labelClass,
          isConfirmed: state.params.isConfirmed
        }
      };
    case constants.HOVER_TEXT_FORM:
      if (_.isEmpty(state.params.keyword)) {
        textClass = 'search__form_text search__form_text_hover';
      } else {
        textClass = 'search__form_text search__form_text_active  search__form_text_hover';
      }
      return {
        params: {
          keyword: state.params.keyword,
          textClass: textClass,
          buttonClass: state.params.buttonClass,
          labelClass: state.params.labelClass,
          isConfirmed: state.params.isConfirmed
        }
      };
    case constants.OUT_TEXT_FORM:
      if (_.isEmpty(state.params.keyword)) {
        textClass = 'search__form_text';
      } else {
        textClass = 'search__form_text search__form_text_active';
      }
      return {
        params: {
          keyword: state.params.keyword,
          textClass: textClass,
          buttonClass: state.params.buttonClass,
          labelClass: state.params.labelClass,
          isConfirmed: state.params.isConfirmed
        }
      };
    case constants.HOVER_BUTTON_FORM:
      buttonClass = 'search__form_button search__form_button_hover';
      return {
        params: {
          keyword: state.params.keyword,
          textClass: state.params.textClass,
          buttonClass: buttonClass,
          labelClass: state.params.labelClass,
          isConfirmed: state.params.isConfirmed
        }
      };
    case constants.OUT_BUTTON_FORM:
      buttonClass = 'search__form_button';
      return {
        params: {
          keyword: state.params.keyword,
          textClass: state.params.textClass,
          buttonClass: buttonClass,
          labelClass: state.params.labelClass,
          isConfirmed: state.params.isConfirmed
        }
      };
    case constants.CONFIRMED_INPUT:
      return {
        params: {
          keyword: state.params.keyword,
          textClass: state.params.textClass,
          buttonClass: state.params.buttonClass,
          labelClass: state.params.labelClass,
          isConfirmed: true
        }
      };
    default:
      return state;
  }
}