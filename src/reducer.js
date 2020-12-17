export const initialState = {
   term: null,
}

export const actionTypes = {
   SET_SEARCH_TERM: 'SET_SEARCH_TERM',
}

export default function reducer(state, action) {
   console.log(action)
   // listen for dispatch action 
   switch (action.type) {
      case actionTypes.SET_SEARCH_TERM:
         return {
            ...state,
            term: action.term,
         }
      default:
         return state
   }
}