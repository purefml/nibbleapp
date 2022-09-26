import React, {FunctionComponent} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Home} from '../screens';
import {TabarIcons} from '../components';
import {COLORS} from '../constants';

const Tab: any = createMaterialTopTabNavigator();

interface Props {}

const Tabs: FunctionComponent<Props> = (props: Props) => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={({navigation, route}: any) => ({
        tabBarStyle: {
          backgroundColor: COLORS.black,
        },
        tabBarIndicatorStyle: {backgroundColor: 'black'},
        swipeEnabled:
          route.name === 'Home' && navigation.isFocused() ? false : true,
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}: any) => (
            <TabarIcons focused={focused} size={30} icon="home-variant" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
