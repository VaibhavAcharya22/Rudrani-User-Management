import {useEffect, useState} from 'react';
import {Dimensions, EmitterSubscription} from 'react-native';
import {dimensionMetrics} from '../theme';

const useOrientation = () => {
  const {landscape, portrait, windowHeight, windowWidth} = {
    ...dimensionMetrics,
  };
  const isLesserWidth = windowWidth < windowHeight;
  const [deviceOrientation, setDeviceOrientation] = useState<string>(
    isLesserWidth ? portrait : landscape,
  );

  useEffect(() => {
    const deviceOrientation = (): void =>
      setDeviceOrientation(isLesserWidth ? portrait : landscape);

    const result: EmitterSubscription = Dimensions.addEventListener(
      'change',
      deviceOrientation,
    );

    return () => result.remove();
  }, []);

  return {deviceOrientation};
};

export default useOrientation;
