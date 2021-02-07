import { NavigationContainer } from "@react-navigation/native";
import React, { Fragment } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import { Video } from "expo-av";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem_Moderate, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem_Moderate";
import CarouselCards_Moderate from "./CarouselCards_Moderate";
import Stopwatch from "./stopwatch/stopwatch";

export default function Training_Moderate({ navigation }) {
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <CarouselCards_Moderate />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});
