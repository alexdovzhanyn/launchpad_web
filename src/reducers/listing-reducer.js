import { addListing} from '../actions/listing-actions';

const ListingReducer = {

  listings: function(state = [], action) {
    switch (action.type) {
      case 'ADD_LISTING':
        return [
          ...state,
          {
            text: action.text
          }
        ]
      default:
        return state
    }
  }

}

export default ListingReducer;