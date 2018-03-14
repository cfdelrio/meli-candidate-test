import { connect } from 'react-redux'
import { addSearchTerm } from '../actions/root-actions';
import ProductList from '../presentational/products-list';

const mapStateToProps = state => {
    return { searchTerm: state.items }
};

export default connect(mapStateToProps, null)(ProductList);