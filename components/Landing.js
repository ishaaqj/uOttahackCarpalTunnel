import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Logo from "./WristMate.png"

export class Landing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image source={Logo} style={styles.image} />

        </View>
        <View style={styles.bottomContainer}>
          {/* <Text style={styles.h2}>
            The purpose of this app is to provide a one-stop resource for Carpal tunnel preventative care. It provides sets of exercises categorized by the severity of the carpal tunnel afflicting the user. By doing so, users can receive a personalized list of exercises depending on their needs. As well, users can look through the entire list of exercises, categorized by severity and localization of hand exercises.
        </Text> */}
        </View>
      </View>
    );
  }
}
export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
  },
  h1: {
    color: '#008F68',
    fontSize: 40,
  },
  h2: {
    color: 'black',
    fontSize: 18,
    marginTop: 8,
  },
  image: {
    width: 300,
    height: 260,
    justifyContent: 'center',
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    width: '90%',
    margin: 20,
    padding: 10,
  },
});