import { connect } from 'react-redux'
import { addProductFetched, addError } from '../actions/root-actions';
import ProductList from '../presentational/products-list';

const mapStateToProps = state => {
    return { 
        searchTerm: state.searchTerm,
        productFetched: state,
    }
};

const mapDispatchToProps = dispatch => {
   return {
      addProductFetchedToStore: product => dispatch(addProductFetched(product)),
      addErrorToStore: error => dispatch(addError(error))
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
