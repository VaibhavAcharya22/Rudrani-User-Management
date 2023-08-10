import React, {FC} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './ChangeThemeBottomSheetStyles';
import ChangeThemeOption from './ChangeThemeOption';
import useChangeTheme, {
  ChangeThemeHookReturnType,
} from './hooks/useChangeTheme';

interface ChangeThemeProps {
  isThemeModalOpen: boolean;
  setIsThemeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTheme: string;
}

const ChangeThemeBottomSheet: FC<ChangeThemeProps> = ({
  isThemeModalOpen,
  setIsThemeModalOpen,
  selectedTheme,
}) => {
  const {themeStyles}: ChangeThemeHookReturnType = useChangeTheme();

  return (
    <SafeAreaView>
      <Modal visible={isThemeModalOpen} transparent={true}>
        <TouchableOpacity
          style={styles.touchableOpacityStyle}
          activeOpacity={1}
          onPress={() => {
            setIsThemeModalOpen(false);
          }}
        />
        <View style={styles.mainView}>
          <View
            style={StyleSheet.flatten([
              styles.mainContainer,
              themeStyles.mainContainer,
            ])}>
            <ChangeThemeOption {...{selectedTheme}} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ChangeThemeBottomSheet;
