import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import { addListing } from '../actions/listing-actions';

const mapStateToProps = state => {
  return {
    listings: state.listings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      console.log('yoooooooo');
      dispatch(addListing("This is a listing"));
    }
  }
}

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;