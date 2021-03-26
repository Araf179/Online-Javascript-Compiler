import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionType } from './action-types';
import { bundlerMiddleware } from './middlewares/bundler-middleware';

export const store = createStore(
  reducers,
  {},
  applyMiddleware(bundlerMiddleware, thunk)
);

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
  },
});
