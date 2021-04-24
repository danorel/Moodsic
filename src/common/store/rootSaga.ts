import { fork, all } from 'redux-saga/effects';

import { routerSaga } from './ducks/router/saga';
import { playlistSaga } from './ducks/playlist/saga';
import { homepageSaga } from './ducks/homepage/saga';
import { musicloverSaga } from './ducks/musiclover/saga';
import { authenticationSaga } from './ducks/authentication/saga';

export default function* rootSaga() {
    yield all([
        fork(homepageSaga),
        fork(routerSaga),
        fork(musicloverSaga),
        fork(playlistSaga),
        fork(authenticationSaga)
    ]);
}
