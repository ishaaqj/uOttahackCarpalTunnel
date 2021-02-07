import { NavigationContainer } from "@react-navigation/native";
import React, { Fragment } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import { Video } from "expo-av";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import CarouselCards from "./CarouselCards";
import data from "./data";
// import data from './data'

export default function Training({ navigation }) {
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <CarouselCards />
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
