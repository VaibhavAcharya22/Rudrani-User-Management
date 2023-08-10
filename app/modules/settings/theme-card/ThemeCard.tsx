import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Images} from '../../../assets';
import {SettingsStrings} from '../../../constants';
import styles from './ThemeCardStyles';
import ChangeThemeBottomSheet from './ChangeThemeBottomSheet';
import {useThemeCard} from './hooks';

const ThemeCard: FC = () => {
  const {isThemeModalOpen, setIsThemeModalOpen, selectedTheme} = useThemeCard();
  return (
    <View style={styles.themeDetailsContainer}>
      <View style={styles.accountContainer}>
        <Image
          source={Images.themeIcon}
          resizeMode="contain"
          style={styles.accountIcon}
        />
        <Text style={styles.accountTitle}>{SettingsStrings.themeTitle}</Text>
      </View>
      <View style={styles.borderContainer}>
        <View style={styles.borderView} />
      </View>
      <View style={styles.themeFieldsContainer}>
        <TouchableOpacity onPress={() => setIsThemeModalOpen(true)}>
          <View style={styles.accountContainer}>
            <Text style={styles.fieldsText}>
              {SettingsStrings.changeThemeTitle}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ChangeThemeBottomSheet
        isThemeModalOpen={isThemeModalOpen}
        setIsThemeModalOpen={setIsThemeModalOpen}
        selectedTheme={selectedTheme}
      />
    </View>
  );
};

export default ThemeCard;
