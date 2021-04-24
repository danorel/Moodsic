import { fork, all } from 'redux-saga/effects';

import { musicloverSaga } from './ducks/musiclover/saga';
import { playlistSaga } from './ducks/playlist/saga';
import { homepageSaga } from './ducks/homepage/saga';
import { routerSaga } from './ducks/router/saga';

export default function* rootSaga() {
    yield all([
        fork(homepageSaga),
        fork(routerSaga),
        fork(musicloverSaga),
        fork(playlistSaga),
    ]);
}
