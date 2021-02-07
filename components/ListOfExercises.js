import React, { useState, Fragment } from "react";
import { ImageBackground, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import TrainingScreen from "./Training";
import Training_Moderate from "./Training_Moderate";
import { NavigationContainer } from "@react-navigation/native";

const DATA = [
    {
        id: "1",
        title: "The Rolling Robo1t",
        uri: "https://thumbs.gfycat.com/CelebratedTanAmericanbadger-small.gif",
        screen: "TrainingScreen"
    },
    {
        id: "2",
        title: "The Funky Monkey2",
        uri: 'https://thumbs.gfycat.com/DefiniteNarrowGenet-small.gif',
        screen: "Training_Moderate"
    },
    {
        id: "3",
        title: "The Trankey Doo",
        uri: 'https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/648x364_3_Wrist_Exercises_to_Prevent_Carpal_Tunnel_EXERCISE_1.gif'
    },
    {
        id: "4",
        title: "The 420 asdasdasd",
        uri: 'https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/648x364_3_Wrist_Exercises_to_Prevent_Carpal_Tunnel_EXERCISE_1.gif'
    },
    {
        id: "5",
        title: "The aasdad asdasd",
        uri: 'https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/648x364_3_Wrist_Exercises_to_Prevent_Carpal_Tunnel_EXERCISE_1.gif'
    },
];



const Item = ({ item, onPress, style }) => (

    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <View style={styles.container2}>
            <ImageBackground source={{ uri: item.uri }} style={styles.image} >

                <Text style={styles.paragraph}>{item.title} </Text>
            </ImageBackground>
        </View>
    </TouchableOpacity>
);

/*
1. Describe exercises on carousel. 1 sentence - this exercise 
*/

const App = ({ navigation }) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = "#999999";

        return (
            <Fragment>
                <Item
                    item={item}
                    onPress={() => navigation.navigate(item.screen)}
                    style={{ backgroundColor }}
                />

            </Fragment>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 12,
        //textAlign: "right",
        color: "white"
    },
    container2: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        //  paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'transparent',
    },
    image: {
        flex: 1,
        //width: 500,
        //height: 300,
        backgroundColor: 'transparent',
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default App;