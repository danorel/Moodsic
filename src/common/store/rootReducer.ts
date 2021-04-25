import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { State } from 'RootState';

import homepage from './ducks/homepage/reducer';
import playlist from './ducks/playlist/reducer';
import musiclover from './ducks/musiclover/reducer';
import playground from './ducks/playground/reducer';
import authentication from './ducks/authentication/reducer';

export default (history: History) =>
    combineReducers<State>({
        homepage,
        playlist,
        musiclover,
        playground,
        authentication,
        router: connectRouter(history),
    });
