import React from 'react';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import { Login } from '../Authentication/Login';
import { OnBoarding } from '../Authentication/OnBoarding';
import { Welcome } from '../Authentication/Welcome';

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type Routes = {
  OnBoarding: undefined;
  Welcome: undefined;
  Login: undefined;
};

export const AuthenticationStack = createStackNavigator<Routes>();

export const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    <AuthenticationStack.Screen name="Login" component={Login} />
  </AuthenticationStack.Navigator>
);
