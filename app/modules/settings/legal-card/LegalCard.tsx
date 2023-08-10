import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Images} from '../../../assets';
import styles from './LegalCardStyles';
import {SettingsStrings} from '../../../constants';

interface LegalCardProps {
  termsConditionPress: () => void;
  privacyPolicyPress: () => void;
}

const LegalCard: FC<LegalCardProps> = ({
  termsConditionPress,
  privacyPolicyPress,
}) => {
  return (
    <View style={styles.accountDetailsContainer}>
      <View style={styles.accountContainer}>
        <Image
          source={Images.termsConditionsIcon}
          resizeMode="contain"
          style={styles.accountIcon}
        />
        <Text style={styles.accountTitle}>{SettingsStrings.legalTitle}</Text>
      </View>
      <View style={styles.borderContainer}>
        <View style={styles.borderView} />
      </View>
      <View style={styles.fieldsContainer}>
        <TouchableOpacity onPress={termsConditionPress}>
          <View style={styles.accountContainer}>
            <Text style={styles.fieldsText}>
              {SettingsStrings.termsConditionsTitle}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.borderContainer}>
          <View style={styles.borderView} />
        </View>
        <TouchableOpacity onPress={privacyPolicyPress}>
          <View style={styles.logoutContainer}>
            <Text style={styles.fieldsText}>
              {SettingsStrings.privacyPolicyTitle}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.borderContainer}>
        <View style={styles.borderView} />
      </View>
    </View>
  );
};

export default LegalCard;
