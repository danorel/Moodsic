declare module 'RootState' {
    import { RouterState } from 'connected-react-router';
    import { HomepageState } from 'common/store/ducks/homepage/reducer';
    import { PlaylistState } from 'common/store/ducks/playlist/reducer';
    import { MusicloverState } from 'common/store/ducks/musiclover/reducer';
    import { PlaygroundState } from 'common/store/ducks/playground/reducer';
    import { AuthenticationState } from 'common/store/ducks/authentication/reducer';

    export type State = {
        readonly router: RouterState;
        readonly homepage: HomepageState;
        readonly playlist: PlaylistState;
        readonly musiclover: MusicloverState;
        readonly playground: PlaygroundState;
        readonly authentication: AuthenticationState
    }
}
