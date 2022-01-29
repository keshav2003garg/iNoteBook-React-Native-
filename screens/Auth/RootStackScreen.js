import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './AuthScreens/SplashScreen'
import SignInScreen from './AuthScreens/SignInScreen';
import SignUpScreen from './AuthScreens/SignUpScreen';
import NotesScreen from '../Notes/NotesScreen';

const RootStack = createNativeStackNavigator()

export default function RootStackScreen() {
    return (
    <RootStack.Navigator screenOptions={{headerShown: false}} >
        <RootStack.Screen name='SplashScreen' component={SplashScreen} />
        <RootStack.Screen name='SignInScreen' component={SignInScreen} />
        <RootStack.Screen name='SignUpScreen' component={SignUpScreen} />
        <RootStack.Screen name='NotesScreen' component={NotesScreen} />
    </RootStack.Navigator>)
}
