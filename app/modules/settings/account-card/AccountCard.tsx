import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Images} from '../../../assets';
import styles from './AccountCardStyles';
import {SettingsStrings} from '../../../constants';
import {useAccountCard} from './hooks';
import {AccountCardHookReturnType} from './hooks/useAccountCard';

const AccountCard: FC = () => {
  const {handleLogoutPress, handleChangePassword}: AccountCardHookReturnType =
    useAccountCard();

  return (
    <View style={styles.accountDetailsContainer}>
      <View style={styles.accountContainer}>
        <Image
          source={Images.accountIcon}
          resizeMode="contain"
          style={styles.accountIcon}
        />
        <Text style={styles.accountTitle}>{SettingsStrings.accountTitle}</Text>
      </View>
      <View style={styles.borderContainer}>
        <View style={styles.borderView} />
      </View>
      <View style={styles.fieldsContainer}>
        <TouchableOpacity onPress={handleChangePassword}>
          <View style={styles.accountContainer}>
            <Text style={styles.fieldsText}>
              {SettingsStrings.changePasswordTitle}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.borderContainer}>
          <View style={styles.borderView} />
        </View>
        <TouchableOpacity onPress={handleLogoutPress}>
          <View style={styles.logoutContainer}>
            <Text style={styles.fieldsText}>{SettingsStrings.logoutTitle}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.borderContainer}>
        <View style={styles.borderView} />
      </View>
    </View>
  );
};

export default AccountCard;
