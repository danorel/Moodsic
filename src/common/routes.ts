import loadable from '@loadable/component';
import { fetchCatalog } from 'common/store/ducks/catalog/actions';
import { fetchHomepage } from 'common/store/ducks/homepage/actions';
import { fetchShoes } from 'common/store/ducks/shoes/actions';
import { RouterFetchDataArgs } from 'common/types';

const HomePage = loadable(() => import('../client/pages/Home/Home'));
const CatalogPage = loadable(() => import('../client/pages/Catalog/Catalog'));
const UpcomingPage = loadable(() => import('../client/pages/Upcoming/Upcoming'));
const SneakersPage = loadable(() => import('../client/pages/Sneakers/Sneakers'));
const NotFoundPage = loadable(() => import('../client/pages/404/404'));

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
            dispatch(fetchHomepage());
        },
    },
    {
        path: '/catalog',
        component: CatalogPage,
        exact: true,
        fetchData({ dispatch }: RouterFetchDataArgs) {
            dispatch(fetchCatalog());
        },
    },
    {
        path: '/sneakers/:slug',
        component: SneakersPage,
        exact: true,
        fetchData({ dispatch, match }: RouterFetchDataArgs) {
            dispatch(fetchShoes(match.params.slug));
            dispatch(fetchHomepage());
        },
    },
    {
        path: '/upcoming',
        component: UpcomingPage,
        exact: true,
    },
    {
        path: '*',
        component: NotFoundPage,
        exact: true,
    },
];
