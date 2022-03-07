/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectContentList = state => state.contentList || initialState;

const selectContents = () =>
  createSelector(
    selectContentList,
    contentList => contentList.contents,
  );

export { selectContentList, selectContents };
