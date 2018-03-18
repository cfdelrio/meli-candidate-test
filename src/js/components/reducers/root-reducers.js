import { combineReducers } from 'redux'

export const searchReducer = (state = [], action ) => {
    switch (action.type) {
      case 'ADD_SEARCH_TERM':{
        return {
          state,
          fireRedirect: true,
          searchTerm: action.searchTerm
        }
      }
      default:
        return state
    }
  };

export const ADD_SEARCH_TERM = 'ADD_SEARCH_TERM';

export const productFetchedReducer = (state = [], action ) => {
  switch (action.type) {
    case 'ADD_PRODUCT_FETCHED':{
      return {
        state,
        productFetched: action.product
      }
    }
    default:
      return state
  }
};

export const ADD_PRODUCT_FETCHED = 'ADD_PRODUCT_FETCHED';

export const productReducer = (state = [], action ) => {
  switch (action.type) {
    case 'ADD_PRODUCT':{
      return {
        state,
        product: action.product
      }
    }
    default:
      return state
  }
};

export const ADD_PRODUCT = 'ADD_PRODUCT';


export const hasError = (state = [], action ) => {
  switch (action.type) {
    case 'HAS_ERROR':{
      console.log(action);
      return {
        state,
        error: action.searchTerm
      }
    }
    default:
    return state
  }
};

export const HAS_ERROR = 'HAS_ERROR';

const rootReducer = combineReducers({
  productFetchedReducer,
  productReducer,
  searchReducer,
  hasError
});

export default rootReducer;