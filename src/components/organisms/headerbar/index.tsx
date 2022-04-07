import {useNavigation} from '@react-navigation/native';
import React, {ReactElement, useState} from 'react';
import {StyleProp, ViewStyle, StyleSheet, View, Platform} from 'react-native';
import {back, navBar, search} from '../../../styles/images';
import BaseImage from '../../atoms/base_image';
import BaseText from '../../atoms/base_text';
import DeviceInfo from 'react-native-device-info';
import * as Colors from '../../../styles/color';
import BasePressable from '../../atoms/base_pressable';
import SearchBar from '../../molecules/searchbar';

type Props = {
  title: string;
  onPress?: (item: any) => void;
  searchText?: string;
  onSearchTextChange?: (text: string) => void;
  onSearchClose?: () => void;
  style?: StyleProp<ViewStyle>;
};
function HeaderBar(props: Props): ReactElement {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.status} />
      <View style={styles.mainContainer}>
        <BaseImage resizeMode="cover" style={styles.bgImage} url={navBar} />

        <BasePressable
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <BaseImage url={back} style={styles.back} />
        </BasePressable>
        {showSearchBar ? (
          <SearchBar
            value={props.searchText ?? ''}
            onTextChange={(text: string) => {
              if (props.onSearchTextChange) {
                props.onSearchTextChange(text);
              }
            }}
            closeSearch={() => {
              if (props.onSearchClose) {
                props.onSearchClose();
              }
              setShowSearchBar(false);
            }}
            style={styles.search}
          />
        ) : (
          <>
            <View style={styles.titleContainer}>
              <BaseText style={styles.title}>{props.title}</BaseText>
            </View>
            <BasePressable
              style={styles.searchButton}
              onPress={() => {
                setShowSearchBar(true);
              }}>
              <BaseImage url={search} style={styles.back} />
            </BasePressable>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? (DeviceInfo.hasNotch() ? 90 : 70) : 56,
    width: '100%',
    backgroundColor: Colors.transparent,
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    width: '100%',
    // bottom: 0,
  },
  status: {
    width: '100%',
    height: Platform.OS === 'ios' ? (DeviceInfo.hasNotch() ? 44 : 20) : 0,
    backgroundColor: Colors.black,
  },
  back: {
    width: 18,
    height: 18,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  backButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    height: 50,
  },
  title: {
    color: Colors.textWhite,
    fontSize: 18,
    textAlignVertical: 'center',
    // marginBottom: 5,
    marginLeft: 10,
    letterSpacing: 1,
  },
  searchButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginRight: 10,
  },
  search: {
    marginTop: 8,
  },
});
export default HeaderBar;
