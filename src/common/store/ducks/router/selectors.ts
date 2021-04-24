import { State } from 'RootState';

export function getCurrentPathname(state: State) {
    return state.router.location.pathname;
}
