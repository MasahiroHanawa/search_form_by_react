import * as constants from '../utils/constants';

export function isTextEmpty(keyword) {
  return {
    type: constants.IS_TEXT_EMPTY,
    keyword: keyword
  }
}

export function hoverTextForm() {
  return {
    type: constants.HOVER_TEXT_FORM
  }
}

export function outTextForm() {
  return {
    type: constants.OUT_TEXT_FORM
  }
}

export function hoverButtonForm() {
  return {
    type: constants.HOVER_BUTTON_FORM
  }
}

export function outButtonForm() {
  return {
    type: constants.OUT_BUTTON_FORM
  }
}

export function confirmInput() {
  return {
    type: constants.CONFIRMED_INPUT
  }
}

