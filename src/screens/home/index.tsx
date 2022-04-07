import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/molecules/button';
import {AppStackParamList} from '../../navigation';

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Try editing me! 🎉</Text>
      <Button
        title="Show List"
        onPress={() => {
          navigation.navigate('ShowsList');
        }}
      />
    </View>
  );
};

export default Home;
