import { MusicloverId } from 'RootModels';

import { timeout } from '../timeoutHelper';

// @ts-ignore
import mock from './mocks/mock.json';

export const serializer = (data: any) => {
    return data.playlists;
};

// Emulate api request
export const fetchPlaylists = (musicloverId: MusicloverId) =>
    timeout(1500)
        .then(() => serializer({ ...mock, musicloverId }));

export const fetchPlaylistsByQuery = (musicloverId: MusicloverId, query: string) =>
    timeout(500)
        .then(() => serializer({ ...mock, query, musicloverId }));
