import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    selectSignIn as isSignInSelector,
    selectLoading as isLoadingSelector,
    selectAuthenticated as authenticatedSelector,
} from '../../../common/store/ducks/authentication/selectors';

import { fetchAuthenticationRequest as fetchAuthenticationActionCreator } from 'common/store/ducks/authentication/actions';

export function useAuthentication() {
    const dispatch = useDispatch();

    const isSignIn = useSelector(isSignInSelector);
    const isLoading = useSelector(isLoadingSelector);
    const isAuthenticated = useSelector(authenticatedSelector);

    const fetchAuthentication = React.useCallback(
        () => dispatch(fetchAuthenticationActionCreator()),
        [dispatch]
    );

    return {
        isSignIn,
        isLoading,
        isAuthenticated,
        fetchAuthentication,
    };
}
