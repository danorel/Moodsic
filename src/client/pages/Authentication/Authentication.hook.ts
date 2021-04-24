import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    selectEmail as emailSelector,
    selectLoading as isLoadingSelector,
    selectSwitching as switchingSelector,
    selectAuthenticated as authenticatedSelector,
} from '../../../common/store/ducks/authentication/selectors';

import {
    fetchEmailRequest as fetchEmailActionCreator,
    fetchSwitchingRequest as fetchSwitchingActionCreator,
    fetchSubmissionRequest as fetchSubmissionActionCreator,
    fetchAuthenticationRequest as fetchAuthenticationActionCreator,
} from 'common/store/ducks/authentication/actions';

import {
    AuthenticationEmail,
    AuthenticationSwitching
} from 'RootModels';

export function useAuthentication() {
    const dispatch = useDispatch();

    const email = useSelector(emailSelector);
    const switching = useSelector(switchingSelector);
    const isLoading = useSelector(isLoadingSelector);
    const isAuthenticated = useSelector(authenticatedSelector);

    const onChangeEmail = React.useCallback(
        (email: AuthenticationEmail) => dispatch(fetchEmailActionCreator(email)),
        [dispatch]
    );

    const onChangeSwitching = React.useCallback(
        (switching: AuthenticationSwitching) => dispatch(fetchSwitchingActionCreator(switching)),
        [dispatch]
    );

    const fetchSubmission = React.useCallback(
        () => dispatch(fetchSubmissionActionCreator()),
        [dispatch]
    );

    const fetchAuthentication = React.useCallback(
        () => dispatch(fetchAuthenticationActionCreator()),
        [dispatch]
    );

    return {
        email,
        switching,
        isLoading,
        isAuthenticated,
        onChangeEmail,
        onChangeSwitching,
        fetchSubmission,
        fetchAuthentication,
    };
}
