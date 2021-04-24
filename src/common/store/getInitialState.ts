import { RouterState } from 'connected-react-router';
import { State } from 'RootState';
import { initialState as homepage } from './ducks/homepage/reducer';
import { initialState as musiclover } from './ducks/musiclover/reducer';
import { initialState as playlist } from './ducks/playlist/reducer';

export const getInitialState = (pathname: string = '/'): State => {
    return {
        homepage,
        musiclover,
        playlist,
        router: {
            location: { pathname, search: '', hash: '', key: '' },
            action: 'POP',
        } as RouterState,
    };
};
