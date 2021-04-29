import { MusicloverId } from 'RootModels';

import { timeout } from '../timeoutHelper';

// @ts-ignore
import queryMock from './mocks/queryMock.json';
import playlistsMock from './mocks/playlistsMock.json';

export const serializer = (data: any) => {
    return data.playlists;
};

// Emulate api request
export const fetchPlaylists = (musicloverId: MusicloverId) =>
    timeout(1500)
        .then(() => serializer({ ...playlistsMock, musicloverId }));

export const fetchPlaylistsByQuery = (musicloverId: MusicloverId, query: string) =>
    timeout(500)
        .then(() => serializer({ ...queryMock, query, musicloverId }));
