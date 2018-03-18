
export const addSearchTerm = searchTerm => {
  return {
    type: 'ADD_SEARCH_TERM',
    searchTerm
  }
}


export const addProductFetched = product => {
  return {
    type: 'ADD_PRODUCT_FETCHED',
    product
  }
}

export const addProduct = product => {
  return {
    type: 'ADD_PRODUCT',
    product
  }
}

export const addError  = error => {
  return {
    type: 'HAS_ERROR',
    error
  }
}