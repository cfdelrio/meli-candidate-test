import { connect } from 'react-redux'
import { addProductFetched, hasError } from '../actions/root-actions';
import Product from '../presentational/product';

const mapDispatchToProps = dispatch => {
   return {
      addProductToStore: product => dispatch(addProductFetched(product)),
      addErrorToStore: error => dispatch(hasError(error)),
   }
};

const mapStateToProps = state => {
    return { productFetched: state.productFetched }
};

export default connect(mapStateToProps, null)(Product);