

import {
    legacy_createStore,
    applyMiddleware,
  } from 'redux';
  import thunk from 'redux-thunk';
import reducers from '.';



export const store = legacy_createStore(
    reducers,
    {},
    applyMiddleware(thunk)
  )

  
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

//   const rootReducer = combineReducers({ toodo:todoReducer });
  
//   const composeEnhancers =  compose;
  
//   export const store = legacy_createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(thunk))
//   );