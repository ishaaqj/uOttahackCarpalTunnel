import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState, Component, Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "./components/Main";
import Training_Moderate from "./components/Training_Moderate";
import Training_Severe from "./components/Training_Severe";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Training_Moderate"
          component={Training_Moderate}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Training_Severe"
          component={Training_Severe}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
var styles = StyleSheet.create({
  backgroundVideo: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
