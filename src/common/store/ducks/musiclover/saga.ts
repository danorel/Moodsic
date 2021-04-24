import { put, takeLatest, call } from 'redux-saga/effects';

import * as types from './types';
import * as actions from './actions';
import * as service from './service';

function* fetchMusiclover() {
    try {
        const data = yield call(service.fetchMusiclover);

        yield put(actions.fetchMusicloverSuccess(data));
    } catch (error) {
        yield put(actions.fetchMusicloverError(error.message));
    }
}

export function* musicloverSaga() {
    yield takeLatest(types.FETCH_MUSICLOVER_REQUEST, fetchMusiclover);
}
