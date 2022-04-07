import React, {ReactElement} from 'react';
import {StyleProp, ViewStyle, StyleSheet, View, Dimensions} from 'react-native';
import {getImageName} from '../../../services/content-helper';
import {ShowContent} from '../../../types/modal/show_list';
import BaseImage from '../../atoms/base_image';
import BaseText from '../../atoms/base_text';
import * as Colors from '../../../styles/color';

type Props = {
  data: ShowContent;
  index: number;
  onPress?: (item: any) => void;
  style?: StyleProp<ViewStyle>;
};
function ShowItem(props: Props): ReactElement {
  return (
    <View style={[styles.container, props.style]}>
      <BaseImage
        url={getImageName(props.data?.['poster-image'])}
        style={
          props.index == 0 || props.index == 1 || props.index == 2
            ? styles.posterFirst
            : styles.poster
        }
        resizeMode={'cover'}
      />
      <BaseText numberOfLines={1} style={styles.textStyle}>
        {props.data?.name ?? ''}
      </BaseText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  posterFirst: {
    width: Dimensions.get('window').width / 3 - 13.5,
    height: Dimensions.get('window').height / 3 - 45,
  },
  poster: {
    width: Dimensions.get('window').width / 3 - 13.5,
    height: Dimensions.get('window').height / 3 - 61,
  },
  textStyle: {
    fontSize: 14,
    marginTop: 8,
    color: Colors.textWhite,
    letterSpacing: 1,
  },
});
export default ShowItem;
