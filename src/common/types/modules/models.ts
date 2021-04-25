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

    export type PlaygroundItem = {
        title: string;
        emoji: string;
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
     *    - weather
     *    - songs
     */

    export type PlaylistId = string;
    export type PlaylistName = string;
    export type PlaylistAim = string;
    export type PlaylistMood = string;
    export type PlaylistWeather = string;

    export type Playlist = {
        id: PlaylistId;
        name: PlaylistName;
        aim: PlaylistAim[];
        mood: PlaylistMood[];
        weather: PlaylistWeather;
        songs: Song[];
    };
}
