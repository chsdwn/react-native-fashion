import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from '@shopify/restyle';

import { OnBoarding } from './src/Authentication/OnBoarding';
import { Welcome } from './src/Authentication/Welcome';

import { theme } from './src/theme/Theme';

// const fonts = {
//   'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
//   'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
//   'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
// };

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
  </AuthenticationStack.Navigator>
);

export const App = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <SafeAreaView style={{ flex: 1 }}>
          <AuthenticationNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({});
