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
          activeTintColor: "#111",
          inactiveTintColor: "#111",
          activeBackgroundColor: "#feb236",
          inactiveBackgroundColor: "steelblue",
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
        <Tab.Screen
          name="ExercisesScreen"
          component={ExercisesScreen}
          options={{
            tabBarLabel: "Exercises",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="dumbbell" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="TrainingScreen"
          component={TrainingScreen}
          options={{
            tabBarLabel: "Training",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="weight-lifter"
                color={color}
                size={30}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
export default Main;
