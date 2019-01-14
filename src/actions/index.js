import { async } from "q";

let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


export const FETCH_SEARCH_DATA = '[Search] Loading...';
export const FETCH_SEARCH_SUCCESS = '[Search] Success';
export const FETCH_SEARCH_FAILURE = '[Search] Error';

export function fetchSearchData(args){
  return async (dispatch) => {
    dispatch({
      type: FETCH_SEARCH_DATA
    });

    try {

      const result = await fetchSearchData(args.pageCount, args.itemsPerPage);

      dispatch({
        type: FETCH_SEARCH_SUCCESS,
        payload: result,
        currentPage: args.pageCount
      });

    } catch (error) {
       dispatch({
        type: FETCH_SEARCH_FAILURE,
        error: error
      });
    }
  }
}