import loadable from '@loadable/component';
import { fetchMusicloverRequest } from 'common/store/ducks/musiclover/actions';
import { fetchHomepageRequest } from 'common/store/ducks/homepage/actions';
import { RouterFetchDataArgs } from 'RootRouter';

const HomePage = loadable(() => import('client/pages/Home/Home'));
const NotFoundPage = loadable(() => import('client/pages/404/404'));
const PlaylistPage = loadable(() => import('client/pages/Playlist/Playlist'));
const PlaylistsPage = loadable(() => import('client/pages/Playlists/Playlists'));
const PlaygroundPage = loadable(() => import('client/pages/Playground/Playground'));
const AuthenticationPage = loadable(() => import('client/pages/Authentication/Authentication'));

/**
 * Routes are moved to a separate file,
 * so that you can use the asyncFetchData method on the component on the server (by url path)
 * which load all the necessary data for rendering the page.
 */
export default [
    {
        path: '/',
        component: HomePage,
        exact: true,
        fetchData({ dispatch }: RouterFetchDataArgs) {
            dispatch(fetchHomepageRequest());
        },
    },
    {
        path: '/authentication',
        component: AuthenticationPage,
        exact: true,
        fetchData({ dispatch }: RouterFetchDataArgs) {
            dispatch(fetchMusicloverRequest());
            dispatch(fetchHomepageRequest());
        },
    },
    {
        path: '/musiclover/:musicloverId/playground',
        component: PlaygroundPage,
        exact: true,
        fetchData({ dispatch, match }: RouterFetchDataArgs) {
            dispatch(fetchMusicloverRequest());
            dispatch(fetchHomepageRequest());
        },
    },
    {
        path: '/musiclover/:musicloverId/playlist/:playlistId',
        component: PlaylistPage,
        exact: true,
        fetchData({ dispatch }: RouterFetchDataArgs) {
            dispatch(fetchMusicloverRequest());
            dispatch(fetchHomepageRequest());
        },
    },
    {
        path: '/musiclover/:musicloverId/my-playlists/',
        component: PlaylistsPage,
        exact: true,
        fetchData({ dispatch }: RouterFetchDataArgs) {
            dispatch(fetchMusicloverRequest());
            dispatch(fetchHomepageRequest());
        },
    },
    {
        path: '*',
        component: NotFoundPage,
        exact: true,
    },
];
