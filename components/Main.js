import React, { Component } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import LandingScreen from "./Landing";
import TrainingScreen from "./Training";
import ExercisesScreen from "./ListOfExercises"

export class Main extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="LandingScreen" component={LandingScreen} />
        <Tab.Screen name="TrainingScreen" component={TrainingScreen} />
        <Tab.Screen name="List Of Exercises" component={ExercisesScreen} />
      </Tab.Navigator>
    );
  }
}
export default Main;
