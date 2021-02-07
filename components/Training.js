import React, { Fragment } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import CarouselCards from "./CarouselCards";
import StopwatchContainer from "./stopwatch/stopwatch";

export default function Training({ navigation }) {
  const [index, setIndex] = React.useState(0);
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <CarouselCards />
        <StopwatchContainer />
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 600,
    padding: 50,
  },
});
