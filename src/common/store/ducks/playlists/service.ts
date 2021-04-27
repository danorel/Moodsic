import { MusicloverId } from 'RootModels';

import { timeout } from '../timeoutHelper';

// @ts-ignore
import mock from './mocks/mock.json';

export const serializer = (data: any) => {
    return {
        playlists: data.playlists,
        musicloverId: data.musicloverId,
    };
};

// Emulate api request
export const fetchPlaylists = (musicloverId: MusicloverId) =>
    timeout(1500)
        .then(() => serializer({ ...mock, musicloverId }));
