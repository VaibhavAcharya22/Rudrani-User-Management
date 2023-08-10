import React, {FC} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {Images} from '../../assets';
import {UploadOptionsStrings} from '../../constants';
import styles from './UploadOptionsStyles';
import {useUploadOptions} from './hooks';
import {UploadOptionsHookReturnType} from './hooks/useUploadOption';

interface UploadOptionsProps {
  isPickerVisible: boolean;
  setIsPickerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isProfile?: boolean;
}
const UploadOptions: FC<UploadOptionsProps> = ({
  isPickerVisible,
  setIsPickerVisible,
  isProfile,
}) => {
  const {
    handleCameraUploadImage,
    handleGalleryUploadImage,
    closeModal,
  }: UploadOptionsHookReturnType = useUploadOptions(
    isProfile!,
    setIsPickerVisible,
  );

  return (
    <View>
      <Modal
        visible={isPickerVisible}
        transparent={true}
        onRequestClose={closeModal}>
        <TouchableOpacity
          style={styles.mainTouchableOpacityStyle}
          activeOpacity={1}
          onPressOut={closeModal}>
          <View style={styles.mainContainer}>
            <TouchableOpacity
              onPress={() => handleGalleryUploadImage(setIsPickerVisible)}>
              <View style={styles.galleryIconContainer}>
                <Image
                  source={Images.galleryIcon}
                  style={styles.iconsImageStyle}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.galleryTextStyle}>
                {UploadOptionsStrings.gallery}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCameraUploadImage(setIsPickerVisible)}>
              <View style={styles.cameraIconContainer}>
                <Image
                  source={Images.cameraIcon}
                  style={styles.iconsImageStyle}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.cameraTextStyle}>
                {UploadOptionsStrings.camera}
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default UploadOptions;
