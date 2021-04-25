declare module 'RootComponents' {
    import * as React from 'react';

    export type HeaderMenu = {
        complex: boolean;
        child: React.ReactNode;
        to?: string | undefined;
        query?: string | undefined;
        exact?: boolean | undefined;
        name?: string | undefined;
        path?: string | undefined;
        styles?: string | undefined;
    };
}
