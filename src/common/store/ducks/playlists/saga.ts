import { put, takeLatest, call } from 'redux-saga/effects';

import * as types from './types';
import * as actions from './actions';
import * as service from './service';

function* fetchPlaylists(action: types.FetchPlaylistsRequestAction) {
    try {
        const musicloverId = action.payload;
        const data = yield call(service.fetchPlaylists, musicloverId);

        yield put(actions.fetchPlaylistsSuccess(data));
    } catch (error) {
        yield put(actions.fetchPlaylistsError(error.message));
    }
}

function* fetchPlaylistsByQuery(action: types.FetchPlaylistsByQueryRequestAction) {
    try {
        const { musicloverId, query } = action.payload;
        const data = yield call(service.fetchPlaylistsByQuery, musicloverId, query);

        yield put(actions.fetchPlaylistsByQuerySuccess(data));
    } catch (error) {
        yield put(actions.fetchPlaylistsByQueryError(error.message));
    }
}

export function* playlistsSaga() {
    yield takeLatest(types.FETCH_PLAYLISTS_REQUEST, fetchPlaylists);
}

export function* playlistsByQuerySaga() {
    yield takeLatest(types.FETCH_PLAYLISTS_BY_QUERY_REQUEST, fetchPlaylistsByQuery);
}
