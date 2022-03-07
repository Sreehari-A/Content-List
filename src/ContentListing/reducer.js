/*
 * ContentListReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import ActionTypes from './constants';

// The initial state of the App
export const initialState = {
  contents: {},
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.SET_CONTENTS:
        draft.contents[action.payload.pageNum] = action.payload.listData;
        break;
    }
  });

export default homeReducer;
