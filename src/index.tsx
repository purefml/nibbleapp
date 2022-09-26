import React, { useEffect } from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {navigationRef} from './navigation/GlobalNavigation';
import {Main} from './navigation/Main';
import 'react-native-gesture-handler';
import {COLORS} from './constants';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.backgroundColor
  },
};


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        // translucent={true}
        backgroundColor={COLORS.backgroundColor}
      />
      <NavigationContainer 
      theme={MyTheme}
      ref={navigationRef}>
        <SafeAreaProvider style={{ flex: 1 }}>
        <Main />
        </SafeAreaProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
