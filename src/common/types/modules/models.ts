declare module 'RootModels' {
    /*
     * Authentication types
     *    - status: boolean
     *    - switch: boolean
     */

    export type AuthenticationStatus = boolean;

    export type AuthenticationSwitching =
        | true  // stands for sign in
        | false // stands for sign up

    export type AuthenticationEmail = string;

    /*
     * Playground types:
     *     - item: {
     *          title: string;
     *          emoji: string;
     *       }
     */

    export type PlaygroundMusiclover = {
        aims: PlaygroundAim[],
        moods: PlaygroundMood[]
    }

    export type PlaygroundConfig = PlaygroundMusiclover;

    export type PlaygroundAim = {
        id: number,
        title: string;
    }

    export type PlaygroundMood = {
        id: number,
        title: string;
    }

    /*
     * Musiclover types:
     *    - id
     */

    export type MusicloverId = string | null;

    export type Musiclover = {
        id: MusicloverId;
    };

    /*
     * Song types:
     *    - name
     *    - size
     */

    export type SongName = string;
    export type SongSize = string;

    export type Song = {
        name: SongName;
        size: SongSize;
    };

    /*
     * Playlist types:
     *    - id
     *    - name
     *    - aim
     *    - mood
     *    - songs
     */

    export type PlaylistId = string;
    export type PlaylistTitle = string;
    export type PlaylistAim = {
        id: string;
        title: string;
    };
    export type PlaylistMood = {
        id: string;
        title: string;
    };
    export type PlaylistDate = Date;

    export type Playlist = {
        id: PlaylistId;
        title: PlaylistTitle;
        aim: PlaylistAim;
        moods: PlaylistMood[];
        songs: Song[];
        date: PlaylistDate;
    };
}
