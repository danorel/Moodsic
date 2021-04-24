import { timeout } from '../timeoutHelper';

// @ts-ignore
import mock from './mock.json';

export const serializer = (data: any) => {
    return {
        isAuthenticated: data.isAuthenticated
    };
};

// Emulate api request
export const fetchAuthentication = () =>
    timeout(500)
        .then(() => serializer({ ...mock }));
