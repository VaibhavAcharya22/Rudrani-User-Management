import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ROUTES, VideosList} from '../../../constants';
import {useEffect, useState} from 'react';

type VideoListType = {
  VideoPlayerDetails: {
    videoDetails: {
      id: number;
      url: string;
      poster: string;
      title: string;
      duration: string;
      views: number;
      uploadedOn: string;
      uploadedBy: string;
      uploadYear: number;
      uploadDate: string;
      disclaimer: string;
      videoTags: string[];
    };
  };
};

interface VideoPlayerDetails {
  id: number;
  url: string;
  poster: string;
  title: string;
  duration: string;
  views: number;
  uploadedOn: string;
  uploadedBy: string;
  uploadYear: number;
  uploadDate: string;
  disclaimer: string;
  videoTags: string[];
}

export interface VideoScreenHookReturnType {
  currentVideo: VideoPlayerDetails;
  filteredVideos: VideoPlayerDetails[];
  isVideoPaused: boolean;
  isVideoDetailsVisible: boolean;
  showHideVideoDetails: () => void;
  hideVideoDetails: () => void;
  handleVideoPosterPress: (item: VideoPlayerDetails) => void;
}

const useVideoPlayer = (): VideoScreenHookReturnType => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const videoData = VideosList.videos;
  const route = useRoute<RouteProp<VideoListType, 'VideoPlayerDetails'>>();
  const currentVideo = route.params.videoDetails;
  const [filteredVideos, setFilteredVideos] = useState<VideoPlayerDetails[]>(
    [],
  );
  const [isVideoPaused, setIsVideoPaused] = useState<boolean>(false);
  const [isVideoDetailsVisible, setIsVideoDetailsVisible] =
    useState<boolean>(true);

  const showHideVideoDetails = () => {
    setIsVideoDetailsVisible(!isVideoDetailsVisible);
  };

  const hideVideoDetails = () => {
    setIsVideoDetailsVisible(false);
  };

  const handleVideoPosterPress = (item: VideoPlayerDetails) => {
    navigation.replace(ROUTES.VideoDetailsScreen, {videoDetails: item});
    setIsVideoPaused(true);
  };

  useEffect(() => {
    const res = videoData.filter(item => item.id !== currentVideo.id);
    setFilteredVideos(res);
  }, []);

  return {
    currentVideo,
    filteredVideos,
    isVideoPaused,
    isVideoDetailsVisible,
    showHideVideoDetails,
    hideVideoDetails,
    handleVideoPosterPress,
  };
};

export default useVideoPlayer;
