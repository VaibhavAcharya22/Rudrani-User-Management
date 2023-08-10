import React, {FC} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import styles from './VideoScreenStyles';
import {VideoScreenHookReturnType} from './VideoScreenTypes';
import {useVideoScreen} from './hooks';
import {VideoCard} from './video-card';

const VideoScreen: FC = () => {
  const {videoData, handleVideoPosterPress}: VideoScreenHookReturnType =
    useVideoScreen();

  return (
    <SafeAreaView style={styles.mainSafeAreaView}>
      <FlatList
        data={videoData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <VideoCard {...{item, handleVideoPosterPress}} />
        )}
      />
    </SafeAreaView>
  );
};

export default VideoScreen;
