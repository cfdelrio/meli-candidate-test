import { connect } from 'react-redux'
import { addSearchTerm } from '../actions/root-actions';
import SearchInput from '../presentational/search-input';

const mapDispatchToProps = dispatch => {
   return {
      onSubmitSearch: searchTerm => dispatch(addSearchTerm(searchTerm)),
   }
};

const mapStateToProps = state => {
    return { searchTerm: state.items }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);