import { MusicloverId } from 'RootModels';

// @ts-ignore
export declare module 'express-session' {
    export interface SessionData {
        musicloverId: MusicloverId | null;
        isAuthorized: boolean;
    }
}
