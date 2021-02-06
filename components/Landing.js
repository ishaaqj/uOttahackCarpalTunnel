import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View, Button } from "react-native";

export default function Landing({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Training"
        onPress={() => navigation.navigate("Training")}
      />
    </View>
  );
}
