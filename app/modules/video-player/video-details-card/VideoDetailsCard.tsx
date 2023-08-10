import React, {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import {VideoScreenStrings} from '../../../constants';
import {VideoListInterface} from '../VideoScreenTypes';
import styles from './VideoDetailsCardStyles';

const VideoDetailsCard: FC<{currentVideo: VideoListInterface}> = ({
  currentVideo,
}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.videoViewsUploadDateContainer}>
        <View>
          <Text style={styles.videoViews}>{currentVideo.views}</Text>
          <Text style={styles.videoViewsTitle}>
            {VideoScreenStrings.viewsTitle}
          </Text>
        </View>
        <View>
          <Text style={styles.videoUploadYear}>{currentVideo.uploadYear}</Text>
          <Text style={styles.videoUploadDate}>{currentVideo.uploadDate}</Text>
        </View>
      </View>
      <View style={styles.tagsContainer}>
        <FlatList
          data={currentVideo.videoTags}
          contentContainerStyle={styles.tagsFlatListContainer}
          renderItem={({item}) => {
            return <Text style={styles.tagTitle}>{`#${item}`}</Text>;
          }}
        />
      </View>
      <View style={styles.disclaimerContainer}>
        <Text style={styles.disclaimerDescription}>
          <Text style={styles.disclaimerTitle}>
            {`${VideoScreenStrings.disclaimer}:`}
          </Text>
          {currentVideo.disclaimer}
        </Text>
      </View>
    </View>
  );
};

export default VideoDetailsCard;
