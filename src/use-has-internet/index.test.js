import React from 'react';
import { injectable } from 'react-magnetic-di';
import { useNetInfo } from '@react-native-community/netinfo';
import { mountWithDi } from '@codexporer.io/react-test-utils';
import { useHasInternet } from './index';

describe('useHasInternet', () => {
    const createHookRenderer = result => () => {
        const hasInternet = useHasInternet();
        result.hasInternet = hasInternet;
        return null;
    };

    const createMockUseNetInfo = ({ isInternetReachable }) => () => ({ isInternetReachable });

    it('should return true', () => {
        const result = {};
        const Renderer = createHookRenderer(result);

        mountWithDi(<Renderer />, {
            deps: [
                injectable(
                    useNetInfo,
                    createMockUseNetInfo({ isInternetReachable: true })
                )
            ]
        });

        expect(result.hasInternet).toBe(true);
    });

    it('should return false', () => {
        const result = {};
        const Renderer = createHookRenderer(result);

        mountWithDi(<Renderer />, {
            deps: [
                injectable(
                    useNetInfo,
                    createMockUseNetInfo({ isInternetReachable: false })
                )
            ]
        });

        expect(result.hasInternet).toBe(false);
    });
});
