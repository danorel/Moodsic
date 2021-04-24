import { State } from 'RootState';

export function getHomepage(state: State) {
    return state.homepage.data;
}

export function isLoading(state: State) {
    return state.homepage.isLoading;
}
