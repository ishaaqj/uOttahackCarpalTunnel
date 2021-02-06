import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState, Component, Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import Video from 'react-native-video';
import LandingScreen from "./components/Landing";
import TrainingScreen from "./components/Training1";


const Stack = createStackNavigator();

export default function App() {
  return (
    <Fragment>


      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen name="Training" component={TrainingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
