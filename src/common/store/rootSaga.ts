import { fork, all } from 'redux-saga/effects';

import { routerSaga } from './ducks/router/saga';
import { homepageSaga } from './ducks/homepage/saga';
import { playlistSaga } from './ducks/playlist/saga';
import { playlistsSaga } from './ducks/playlists/saga';
import { musicloverSaga } from './ducks/musiclover/saga';
import { authenticationSaga, submissionSaga } from './ducks/authentication/saga';
import { playgroundConfigSaga } from './ducks/playground/saga';

export default function* rootSaga() {
    yield all([
        fork(routerSaga),
        fork(homepageSaga),
        fork(playlistSaga),
        fork(playlistsSaga),
        fork(musicloverSaga),
        fork(submissionSaga),
        fork(authenticationSaga),
        fork(playgroundConfigSaga),
    ]);
}
