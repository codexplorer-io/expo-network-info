import { useNetInfo } from '@react-native-community/netinfo';
import { di } from 'react-magnetic-di';

export const useHasInternet = () => {
    di(useNetInfo);

    const { isInternetReachable } = useNetInfo();
    return isInternetReachable;
};
