import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View, Button } from "react-native";

export default function Training({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Training Screen</Text>
      <Button title="Landing" onPress={() => navigation.navigate("Landing")} />
    </View>
  );
}
