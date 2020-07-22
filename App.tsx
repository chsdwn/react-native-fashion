import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { AuthenticationNavigator } from './src/components/Navigation';

import { theme } from './src/theme/Theme';

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
