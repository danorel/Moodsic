import { put, takeLatest, call } from 'redux-saga/effects';

import * as types from './types';
import * as actions from './actions';
import * as service from './service';

function* fetchConfig () {
    try {
        const data = yield call(service.fetchConfig);

        yield put(actions.fetchConfigSuccess(data));
    } catch (error) {
        yield put(actions.fetchConfigFailure(error.message));
    }
}

export function* playgroundConfigSaga() {
    yield takeLatest(types.FETCH_CONFIG_REQUEST, fetchConfig);
}
