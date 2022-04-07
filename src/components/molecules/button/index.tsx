import React, {ReactElement} from 'react';
import {StyleProp, ViewStyle, StyleSheet, TextStyle, View} from 'react-native';
import BasePressable from '../../atoms/base_pressable';
import BaseText from '../../atoms/base_text';
import * as Colors from '../../../styles/color';

type Props = {
  title: string;
  onPress: () => any;
  activeOpacity?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  isDisabled?: boolean;
  type?: 'Normal' | 'Plain';
  rightImageItem?: ReactElement;
};
function Button(props: Props): ReactElement {
  const onButtonPress = () => {
    props.onPress();
  };
  return (
    <BasePressable
      style={[styles.buttonStyle, props.style]}
      activeOpacity={props.activeOpacity}
      disabled={props.isDisabled}
      onPress={onButtonPress}>
      <View style={styles.textContainer}>
        <BaseText style={[styles.titleStyle, props.textStyle]}>
          {props.title}
        </BaseText>
        {props.rightImageItem ?? null}
      </View>
    </BasePressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    width: '100%',
    height: 50,
    borderRadius: 12,
  },
  titleStyle: {
    color: Colors.textWhite,
  },
  textContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Button;
