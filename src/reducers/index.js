import { combineReducers } from 'redux'
// import todos from './todos';
// import visibilityFilter from './visibilityFilter'
import {searchReducer } from './searchReducer';

// export default combineReducers({
//   todos,
//   visibilityFilter
// })

// Root Reducer
export default combineReducers({
  header: headerReducer,
  // login: loginReducer,
  // footer: footerReducer,
  // common: commonReducer,
  // product: productReducer,
  // catalog: catalogReducer,
  // payment: paymentReducer
});

const headerReducer = combineReducers({
  // menu: menuReducer,
  search: searchReducer,
  // location: locationReducer
});


