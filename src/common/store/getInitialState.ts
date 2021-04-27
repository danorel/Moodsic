import { RouterState } from 'connected-react-router';
import { State } from 'RootState';
import { initialState as homepage } from './ducks/homepage/reducer';
import { initialState as musiclover } from './ducks/musiclover/reducer';
import { initialState as playlist } from './ducks/playlist/reducer';
import { initialState as playlists } from './ducks/playlists/reducer';
import { initialState as playground } from './ducks/playground/reducer';
import { initialState as authentication } from './ducks/authentication/reducer';

export const getInitialState = (pathname: string = '/'): State => {
    return {
        homepage,
        playlist,
        playlists,
        musiclover,
        playground,
        authentication,
        router: {
            location: { pathname, search: '', hash: '', key: '' },
            action: 'POP',
        } as RouterState,
    };
};
