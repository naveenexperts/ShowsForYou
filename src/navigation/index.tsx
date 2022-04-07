import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import ShowsList from '../screens/showslist';

export type AppStackParamList = {
  Home: undefined;
  ShowsList: undefined;
};
const Stack = createNativeStackNavigator<AppStackParamList>();

export default function Navigation(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ShowsList"
          component={ShowsList}
          options={{title: 'Romantic Comedy', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
