import { NavigationContainer } from "@react-navigation/native";
import React, { Fragment } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import { Video } from "expo-av";
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import CarouselCards from './CarouselCards'
import data from './data'
// import data from './data'


export default function Training({ navigation }) {
  const [index, setIndex] = React.useState(0)
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <CarouselCards />
      </SafeAreaView>
      <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4", //http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        isLooping
        style={{ width: 500, height: 300 }}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Training Screen</Text>
        <Button
          title="Next Excerise"
          onPress={() => navigation.navigate("Landing")}
        />
      </View>
    </Fragment>
  );
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
});
