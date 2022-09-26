import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Home,
  RestaurantPage
} from '../screens';
import { IconBadge } from '../components';

const NavigationStack: any = createNativeStackNavigator();

interface Props {
  title?: string;
  color?: string;
  style?: any;
}

export const Main: FC<Props> = () => (
  <NavigationStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
    <NavigationStack.Screen name="Home" component={Home} />
    <NavigationStack.Screen name="RestaurantPage" component={RestaurantPage} />
    {/* Stack Screens */}
  </NavigationStack.Navigator>
);
