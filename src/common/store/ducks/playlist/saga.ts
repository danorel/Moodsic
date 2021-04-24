import { put, takeLatest, call } from 'redux-saga/effects';

import * as actions from './actions';
import * as types from './types';
import * as service from './service';

function* fetchShoes(action: types.FetchPlaylistRequestAction) {
    try {
        const slug = action.payload;
        const data = yield call(service.fetchShoes, slug);

        yield put(actions.fetchPlaylistSuccess(data));
    } catch (error) {
        yield put(actions.fetchPlaylistError(error.message));
    }
}

export function* playlistSaga() {
    yield takeLatest(types.FETCH_PLAYLIST_REQUEST, fetchShoes);
}
