import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Images} from '../../../assets';
import styles from './ChangeThemeBottomSheetStyles';

interface ChangeOptionProps {
  onPress: () => void;
  themeStyle: {
    selectedThemeIcon: {
      tintColor: string;
    };
    textStyle: {
      color: string;
    };
    borderStyle: {
      borderBottomColor: string;
    };
  };
  title: string;
  isVisible: boolean;
}

const ChangeOption: FC<ChangeOptionProps> = ({
  onPress,
  themeStyle,
  title,
  isVisible,
}) => {
  return (
    <>
      <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
        <Text
          style={StyleSheet.flatten([styles.textStyle, themeStyle.textStyle])}>
          {title}
        </Text>
        {isVisible && (
          <Image
            source={Images.leftHandIcon}
            style={StyleSheet.flatten([
              styles.selectedThemeIcon,
              themeStyle.selectedThemeIcon,
            ])}
          />
        )}
      </TouchableOpacity>
      <View
        style={StyleSheet.flatten([styles.borderStyle, themeStyle.borderStyle])}
      />
    </>
  );
};

export default ChangeOption;
