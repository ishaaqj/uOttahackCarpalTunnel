import { NavigationContainer } from "@react-navigation/native";

import React, { Fragment } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import { Video } from "expo-av";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import CarouselCards from "./CarouselCards";
import Stopwatch from "./stopwatch/stopwatch";

export default function Training({ navigation }) {
  return (
    <fragment>
      <SafeAreaView style={styles.container}>
        <CarouselCards />
      </SafeAreaView>
      <View>
        <Stopwatch />
      </View>
    </fragment>
  );
}
