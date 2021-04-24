import { timeout } from '../timeoutHelper';

// @ts-ignore
import mock from './mock.json';

export const serializer = (data: any) => {
    return {
        musicloverId: data.musicloverId
    };
};

// Emulate api request
export const fetchMusiclover = () =>
    timeout(500)
        .then(() => serializer({ ...mock }));
