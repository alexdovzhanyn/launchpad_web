import { combineReducers } from 'redux'
import ListingReducer from './listing-reducer';

const reducers = {
  listings: ListingReducer.listings
}

export default combineReducers(reducers);