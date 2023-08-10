import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
const guidelineBaseWidth: number = 375;
const guidelineBaseHeight: number = 812;

// Created helper functions for responsiveness
const horizontalScale = (size: number): number =>
  (width / guidelineBaseWidth) * size;

const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

const globalMetrics = {
  isAndroid: Platform.OS === 'android',
  isIos: Platform.OS === 'ios',
};

const dimensionMetrics = {
  windowWidth: width,
  windowHeight: height,
  portrait: 'portrait',
  landscape: 'landscape',
};

export {
  height,
  globalMetrics,
  dimensionMetrics,
  horizontalScale,
  verticalScale,
  moderateScale,
};
