import React, {FC} from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Images} from '../../assets';
import {CustomTextInput} from '../../components';
import {HomeStrings, ROUTES} from '../../constants';
import {themeColors} from '../../theme';
import {navigationWithoutParam} from '../../utils';
import styles from './HomeScreenStyles';
import {useHome} from './hooks';
import {HomeHookReturnType} from './hooks/useHome';
import {UserCard} from './user-card';

const EmptyComponent: FC = () => {
  return (
    <View style={styles.emptyDataContainer}>
      <Image source={Images.searchNotFound} style={styles.emptyDataImage} />
    </View>
  );
};

const HomeScreen: FC = () => {
  const {
    navigation,
    searchRef,
    searchText,
    displayUsers,
    savedNotifications,
    page,
    themeStyles,
    setPage,
    setSearchText,
  }: HomeHookReturnType = useHome();

  return (
    <SafeAreaView
      style={StyleSheet.flatten([
        styles.safeAreaView,
        themeStyles.safeAreaView,
      ])}>
      <View style={styles.searchBarView}>
        <CustomTextInput
          icon={
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
                navigation.openDrawer();
              }}>
              <Image
                source={Images.breadCrumb}
                resizeMode="contain"
                style={StyleSheet.flatten([
                  styles.breadCrumbStyle,
                  themeStyles.breadCrumbStyle,
                ])}
              />
            </TouchableOpacity>
          }
          ref={searchRef}
          placeholder={HomeStrings.searchPlaceholder}
          value={searchText}
          keyboardType={'default'}
          height={45}
          width={270}
          padding={10}
          borderWidth={2}
          borderRadius={15}
          onChange={(val: string) => setSearchText(val)}
          bgColor={themeColors.whiteColor}
          borderColor={themeColors.secondaryColor}
          inputColor={themeColors.secondaryColor}
          placeholderColor={themeColors.secondaryColor}
        />
        <View style={styles.searchBarView}>
          <TouchableOpacity
            style={styles.searchTextView}
            onPress={() => navigationWithoutParam(ROUTES.NotificationScreen)}>
            <Image
              source={Images.notifications}
              resizeMode="contain"
              style={StyleSheet.flatten([
                styles.searchIconStyle,
                themeStyles.searchIconStyle,
              ])}
            />
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{savedNotifications.length}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        ListEmptyComponent={() => <EmptyComponent />}
        style={styles.flatListStyle}
        data={displayUsers}
        onEndReachedThreshold={0.5}
        onEndReached={() => page < 2 && setPage(page => page + 1)}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => <UserCard user={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
