import React, {ReactElement} from 'react';
import {StyleProp, ViewStyle, TouchableOpacity} from 'react-native';

type Props = {
  children: React.ReactNode;
  onPress?: (item: any) => void;
  style?: StyleProp<ViewStyle>;
  activeOpacity?: number;
  disabled?: boolean;
};

function BasePressable(props: Props): ReactElement {
  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity}
      onPress={props.onPress}
      style={props.style}
      disabled={props.disabled ? props.disabled : false}>
      {props.children}
    </TouchableOpacity>
  );
}

export default BasePressable;
