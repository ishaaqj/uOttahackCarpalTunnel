import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

let padToTwo = (number) => (number <= 9 ? `0${number}` : number);

export class StopwatchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      min: 0,
      sec: 10,
      msec: 0,
      start: false,
    };

    this.lapArr = [];

    this.interval = null;
  }

  handleToggle = () => {
    this.setState(
      {
        start: !this.state.start,
      },
      () => this.handleStart()
    );
  };

  handleLap = (min, sec, msec) => {
    this.lapArr = [...this.lapArr, { min, sec, msec }];
  };

  handleStart = () => {
    if (this.state.start) {
      this.interval = setInterval(() => {
        if (this.state.msec !== 0) {
          this.setState({
            msec: this.state.msec - 1,
          });
        } else if (this.state.sec !== 0) {
          this.setState({
            msec: 59,
            sec: --this.state.sec,
          });
        } else {
          this.setState({
            msec: 0,
            sec: 0,
            min: 0,
          });
        }
      }, 1);
    } else {
      clearInterval(this.interval);
    }
  };

  handleReset = () => {
    this.setState({
      min: 0,
      sec: 10,
      msec: 0,

      start: false,
    });

    clearInterval(this.interval);

    this.lapArr = [];
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.parent}>
          <Text style={styles.child}>{padToTwo(this.state.min) + " : "}</Text>
          <Text style={styles.child}>{padToTwo(this.state.sec) + " : "}</Text>
          <Text style={styles.child}>{padToTwo(this.state.msec)}</Text>
        </View>
        <View style={styles.buttonParent}>
          <TouchableOpacity style={styles.button} onPress={this.handleReset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.handleToggle}>
            <Text style={styles.buttonText}>
              {!this.state.start ? "Start" : "Stop"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default StopwatchContainer;

const styles = StyleSheet.create({
  parent: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 80,
    borderColor: "#694966",
    backgroundColor: "#694966",
    paddingLeft: "8%",
    paddingRight: "8%",
    paddingTop: ".5%",
    paddingBottom: ".5%",
  },

  child: {
    fontSize: 40,
    color: "#C89933",
  },

  buttonParent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "12%",
  },

  button: {
    backgroundColor: "#111111",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    display: "flex",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#694966",
    height: 60,
  },

  buttonText: {
    color: "#C89933",
    fontSize: 20,
    alignSelf: "center",
  },
});
