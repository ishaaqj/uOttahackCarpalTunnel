import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

import LandingScreen from "./Landing";
import TrainingScreen from "./Training";
import ExercisesScreen from "./ListOfExercises";
import TrainingModerateScreen from "./Training_Moderate";

export class Main extends Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#e91e63",
          activeBackgroundColor: "steelblue",
          inactiveBackgroundColor: "powderblue",
          labelStyle: {
            fontSize: 19,
            fontWeight: "bold",
          },
        }}
      >
        <Tab.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen name="List Of Exercises" component={ExercisesScreen} />
        <Tab.Screen name="TrainingScreen" component={TrainingScreen} />
        <Tab.Screen
          name="ModerateTrainingScreen"
          component={TrainingModerateScreen}
          options={{
            showLabel:"false"
          }}
        />
      </Tab.Navigator>
    );
  }
}
const styles = StyleSheet.create({
  fontFamily: "Cochin",
  fontSize: 20,
  fontWeight: "bold",
});

export default Main;
