import React, {ReactElement} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import * as Colors from '../../styles/color';

type Props = {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  numberOfLines?: number;
};

function BaseText(props: Props): ReactElement {
  return (
    <Text
      style={[style.textStyle, props.style]}
      numberOfLines={props.numberOfLines ?? 0}>
      {props.children}
    </Text>
  );
}

const style: any = StyleSheet.create({
  textStyle: {
    color: Colors.black,
    fontSize: 12,
  },
});

export default BaseText;
