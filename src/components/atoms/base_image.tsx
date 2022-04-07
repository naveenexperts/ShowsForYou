import React, {ReactElement} from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';

type Props = {
  url: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
};

function BaseImage(props: Props): ReactElement {
  return (
    <Image
      source={props.url}
      resizeMode={props.resizeMode ?? 'contain'}
      style={[styles.container, props.style]}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
});
export default BaseImage;
