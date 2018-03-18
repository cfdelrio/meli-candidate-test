import { connect } from 'react-redux'
import { addProduct, addError } from '../actions/root-actions';
import Product from '../presentational/product';

const mapStateToProps = state => {
    return { 
        searchTerm: state.searchTerm,        
        productFetched: state.productFetched,
        product: state.product,
    }
};

const mapDispatchToProps = dispatch => {
   return {
      addProduct: product => dispatch(addProduct(product)),
      addErrorToStore: error => dispatch(addError(error)),
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);