import React, {ReactElement} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {close} from '../../../styles/images';
import * as Colors from '../../../styles/color';

type Props = {
  value: string;
  onTextChange: (text: string) => void;
  closeSearch: () => void;
  style?: StyleProp<ViewStyle>;
};
function SearchBar(props: Props): ReactElement {
  const onChangeText = (text: string): void => {
    props.onTextChange(text);
  };
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        style={styles.textInputStyle}
        value={props.value}
        onChangeText={(text: string): void => onChangeText(text)}
        underlineColorAndroid="transparent"
        placeholder="Search"
      />
      <TouchableOpacity
        style={styles.headerIconsContainer}
        onPress={props.closeSearch}>
        <Image style={styles.headerIcons} source={close} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#009688',
    borderWidth: 1,
    borderRadius: 12,
  },
  textInputStyle: {
    height: 38,
    flex: 3,
    textAlign: 'left',
    margin: 5,
    fontSize: 14,
    color: Colors.black,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingLeft: 18,
  },
  headerIcons: {
    height: 15,
    width: 15,
    tintColor: Colors.black,
    opacity: 0.4,
  },
  headerIconsContainer: {
    height: 40,
    width: 40,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
export default SearchBar;
