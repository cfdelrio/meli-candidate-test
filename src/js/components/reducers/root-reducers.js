export const searchReducer = (state = [], action ) => {
    switch (action.type) {
      case 'ADD_SEARCH_TERM':{
        return {
          state,
          fetched: true,
          items: action.searchTerm
        }
      }
      default:
        return state
    }
  };

export const ADD_SEARCH_TERM = 'ADD_SEARCH_TERM';
