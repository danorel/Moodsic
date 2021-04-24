import { timeout } from '../timeoutHelper';

// @ts-ignore
import submissionMock from './mocks/submission.json';
import authenticationMock from './mocks/authentication.json';

export const serializer = (data: any) => {
    return {
        isAuthenticated: data.isAuthenticated
    };
};

// Emulate api request
export const fetchSubmission = () =>
    timeout(500)
        .then(() => serializer({ ...submissionMock }));

export const fetchAuthentication = () =>
    timeout(500)
        .then(() => serializer({ ...authenticationMock }));
