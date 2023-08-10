import React, {FC} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import {Images} from '../../assets';
import {VideoScreenStrings} from '../../constants';
import {useVideoPlayer} from './hooks';
import {VideoScreenHookReturnType} from './hooks/useVideoPlayer';
import {VideoCard} from './video-card';
import {VideoDetailsCard} from './video-details-card';
import styles from './VideoPlayerStyles';

const VideoPlayer: FC = () => {
  const {
    currentVideo,
    filteredVideos,
    isVideoPaused,
    isVideoDetailsVisible,
    showHideVideoDetails,
    hideVideoDetails,
    handleVideoPosterPress,
  }: VideoScreenHookReturnType = useVideoPlayer();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Video
        controls
        source={{
          uri: currentVideo.url,
        }}
        style={styles.backgroundVideo}
        poster={currentVideo.poster}
        posterResizeMode="cover"
        paused={isVideoPaused}
        resizeMode="cover"
      />
      <View style={styles.videoBelowView}>
        <View style={styles.uploaderImageView}>
          <Image
            source={{uri: currentVideo.poster}}
            style={styles.uploaderImage}
          />
        </View>
        <View style={styles.videoTitleContainer}>
          <Text ellipsizeMode="tail" style={styles.videoTitle}>
            {currentVideo.title}
          </Text>
          <Text style={styles.videoViewsText}>
            {`${currentVideo.uploadedBy} - ${currentVideo.views} ${VideoScreenStrings.viewsTitle}`}
          </Text>
        </View>
        <TouchableOpacity onPress={showHideVideoDetails}>
          <Image
            source={
              isVideoDetailsVisible ? Images.upArrowIcon : Images.downArrowIcon
            }
            style={styles.detailsArrowIcon}
          />
        </TouchableOpacity>
      </View>
      {isVideoDetailsVisible && <VideoDetailsCard {...{currentVideo}} />}
      <FlatList
        data={filteredVideos}
        onScrollBeginDrag={hideVideoDetails}
        style={styles.videoFlatList}
        renderItem={({item}) => (
          <VideoCard {...{item, handleVideoPosterPress}} />
        )}
      />
    </SafeAreaView>
  );
};

export default VideoPlayer;
