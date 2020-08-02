import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const isAndroid = Platform.OS === 'Android' || Platform.OS === 'android'; // added for Genymotion
export const hasNotch = DeviceInfo.hasNotch();
// modified is-iphone-x.js from https://gist.github.com/m-tymchyk/a7bd64ff2ee2844a4890de0aa6925fc0#file-is-iphone-x-js
