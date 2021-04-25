import { timeout } from '../timeoutHelper';

// @ts-ignore
import mock from './mocks/configMock.json';

export function serializer(data: any) {
    return {
        config: {
            aims: data.config.aims,
            moods: data.config.moods
        }
    }
}

export function fetchConfig() {
    timeout(1500)
        .then(() => serializer({ ...mock }))
}
