import {ParamListBase, useNavigation} from '@react-navigation/native';
import {ROUTES, VideosList} from '../../../constants';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  VideoListInterface,
  VideoScreenHookReturnType,
} from '../VideoScreenTypes';

const useVideoScreen = (): VideoScreenHookReturnType => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const videoData = VideosList.videos;

  const handleVideoPosterPress = (item: VideoListInterface) => {
    navigation.push(ROUTES.VideoDetailsScreen, {videoDetails: item});
  };

  return {
    videoData,
    handleVideoPosterPress,
  };
};

export default useVideoScreen;
