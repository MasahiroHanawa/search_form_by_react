import { compose, createStore, combineReducers } from 'redux';
import * as reducers from '../reducers';

export default function finalCreateStore() {
  const store = compose()(createStore);
  return store(
    combineReducers({
      ...reducers,
    })
  )
}