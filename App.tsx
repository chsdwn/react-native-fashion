import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { OnBoarding } from './src/Authentication/OnBoarding';

// const fonts = {
//   'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
//   'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
//   'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
// };

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
  </AuthenticationStack.Navigator>
);

export const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{ flex: 1 }}>
        <AuthenticationNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
