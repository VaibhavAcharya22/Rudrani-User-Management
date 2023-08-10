import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './VideoCardStyles';
import {VideoCardInterface} from '../VideoScreenTypes';
import {VideoScreenStrings} from '../../../constants';

const VideoCard: FC<VideoCardInterface> = ({item, handleVideoPosterPress}) => {
  return (
    <TouchableOpacity onPress={() => handleVideoPosterPress(item)}>
      <View style={styles.posterImageContainer}>
        <Image
          source={{uri: item.poster}}
          style={styles.posterImage}
          resizeMode="stretch"
        />
        <View style={styles.durationContainer}>
          <Text style={styles.durationText}>{item.duration}</Text>
        </View>
        <View style={styles.posterBelowContainer}>
          <View style={styles.uploaderImageContainer}>
            <Image source={{uri: item.poster}} style={styles.uploaderImage} />
          </View>
          <View>
            <Text ellipsizeMode="tail" style={styles.videoTitle}>
              {item.title}
            </Text>
            <Text style={styles.viewsText}>
              {`${item.uploadedBy} - ${item.views} ${VideoScreenStrings.viewsTitle}`}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VideoCard;
