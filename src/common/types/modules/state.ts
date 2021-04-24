declare module 'RootState' {
    import { RouterState } from 'connected-react-router';
    import { HomepageState } from 'common/store/ducks/homepage/reducer';
    import { PlaylistState } from 'common/store/ducks/playlist/reducer';
    import { MusicloverState } from 'common/store/ducks/musiclover/reducer';

    export type State = {
        readonly router: RouterState;
        readonly homepage: HomepageState;
        readonly playlist: PlaylistState;
        readonly musiclover: MusicloverState;
    }
}
