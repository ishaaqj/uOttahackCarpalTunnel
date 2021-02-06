import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LandingScreen from "./components/Landing";
import TrainingScreen from "./components/Training";

const Tab = createBottomTabNavigator();

export default function Landing({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Landing" component={LandingScreen} />
      <Tab.Screen name="Training" component={TrainingScreen} />
    </Tab.Navigator>
  );
}
