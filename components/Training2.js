import { NavigationContainer } from "@react-navigation/native";
import React, { Fragment } from "react";
import { Text, View, Button } from "react-native";
import { Video } from "expo-av";

export default function Training({ navigation }) {
  return (
    <Fragment>
      <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        rate={1.0}
        volume={100}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: 500, height: 300 }}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Training Screen</Text>
        <Button
          title="Landing"
          onPress={() => navigation.navigate("Landing")}
        />
      </View>
    </Fragment>
  );
}
