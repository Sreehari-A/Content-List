/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import MockAPIService from '../api/APIService';
import { setContents } from './actions';
import ActionTypes from './constants';

export function* getContents(action) {
  try {
    const pageNum = action.payload;
    const contents = yield call(() =>
      MockAPIService.fetchContentListMock(pageNum),
    );
    if (contents) {
      const { 'content-items': { content: listData } = {}, ...meta } =
        contents || {};
      yield put(setContents({ listData, pageNum, meta }));
    }
  } catch (err) {
    throw err;
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loadContent() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ActionTypes.LOAD_CONTENT, getContents);
}
