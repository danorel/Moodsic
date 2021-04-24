declare module 'RootRouter' {
    import { Dispatch } from 'react';
    import { match } from 'react-router';
    import { MusicloverId } from 'RootModels';
    import { ReduxAction } from 'RootRedux';

    export type RouterFetchDataArgs = {
        dispatch: Dispatch<ReduxAction>;
        match: match<{ musicloverId: MusicloverId }>;
    };
}

