import { put, takeLatest, call } from 'redux-saga/effects';

import * as actions from './actions';
import * as types from './types';
import * as service from './service';

function* fetchAuthentication() {
    try {
        const data = yield call(service.fetchAuthentication);

        yield put(actions.fetchAuthenticationSuccess(data));
    } catch (error) {
        yield put(actions.fetchAuthenticationError(error.message));
    }
}

function* fetchSubmission() {
    try {
        const data = yield call(service.fetchSubmission);

        yield put(actions.fetchSubmissionSuccess(data));
    } catch (error) {
        yield put(actions.fetchSubmissionError(error.message));
    }
}

export function* authenticationSaga() {
    yield takeLatest(types.FETCH_AUTHENTICATION_REQUEST, fetchAuthentication);
}

export function* submissionSaga() {
    yield takeLatest(types.FETCH_SUBMISSION_REQUEST, fetchSubmission);
}
