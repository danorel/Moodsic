import { timeout } from '../timeoutHelper';

// @ts-ignore
import configMock from './mocks/config.json';

export const serializer = (data: any) => {
    return {
        config: data.config,
    };
};

export const fetchConfig = () => timeout(1500).then(() => serializer({ ...configMock }));
