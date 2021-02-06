import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState, Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import Video from 'react-native-video';
import LandingScreen from "./components/Landing";
import TrainingScreen from "./components/Training";
import { Video } from 'expo-av';

// export default class YoutubeExample extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isReady: false,
//       status: "",
//       quality: "",
//       error: ""
//     };
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         {/* <YouTube
//           apiKey='AIzaSyDrnrYfftFc1b7QooPl5L9pUXrwQPEb7pM'
//           videoId="IDRyTAvMzn0"
//           play={true} // control playback of video with true/false
//           fullscreen={false} // video should play in fullscreen or inline
//           loop={false} // control whether the video should loop when ended
//           onReady={e => this.setState({ isReady: true })}
//           onChangeState={e => this.setState({ status: e.state })}
//           onChangeQuality={e => this.setState({ quality: e.quality })}
//           onError={e => this.setState({ error: e.error })}
//           style={styles.youtube}
//         /> */}
//         <YoutubePlayer
//           ref={this.playerRef}
//           height={300}
//           width={400}
//           videoId={"jzD_yyEcp0M"}
//           play={this.state.playing}
//           onChangeState={event => console.log(event)}
//           onReady={() => console.log("ready")}
//           onError={e => console.log(e)}
//           onPlaybackQualityChange={q => console.log(q)}
//           volume={50}
//           playbackRate={1}
//           initialPlayerParams={{
//             cc_lang_pref: "us",
//             showClosedCaptions: true
//           }}
//         />
//         <Text>{`Status: ${this.state.status}`}</Text>
//       </View>

//     );
//   }
// }

export default function App() {
  return (
    <Video
      source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay
      isLooping
      style={{ width: 300, height: 300 }}
    />
  );
}


/* <NavigationContainer>
<Stack.Navigator initialRouteName="Landing">
  <Stack.Screen
    name="Landing"
    component={LandingScreen}
    options={{ headerShown: false }}
  ></Stack.Screen>
  <Stack.Screen name="Training" component={TrainingScreen} />
</Stack.Navigator>
</NavigationContainer>
);
} */

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});