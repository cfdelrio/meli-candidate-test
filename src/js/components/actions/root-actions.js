let nextTodoId = 0

export const addSearchTerm = searchTerm => {
  return {
    type: 'ADD_SEARCH_TERM',
    id: nextTodoId++,
    searchTerm
  }
}
 
export const getSearchTerm = () => {
    return {
      type: 'GET_SEARCH_TERM',
    }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
 
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
 
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
