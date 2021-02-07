import React, { useState, Fragment } from "react";
import { ImageBackground, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import TrainingScreen from "./Training";
import Training_Moderate from "./Training_Moderate";
import Training_Severe from "./Training_Severe";
import { NavigationContainer } from "@react-navigation/native";

const DATA = [
    {
        id: "1",
        title: "Stretches for Mild Carpal Tunnel",
        uri: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/648x364_3_Wrist_Exercises_to_Prevent_Carpal_Tunnel_EXERCISE_1.gif",
        screen: "TrainingScreen"
    },
    {
        id: "2",
        title: "Stretches for Moderate Carpal Tunnel",
        uri: 'https://thumbs.gfycat.com/DefiniteNarrowGenet-small.gif',
        screen: "Training_Moderate"
    },
    {
        id: "3",
        title: "Stretches for Severe Carpal Tunnel",
        uri: 'https://thumbs.gfycat.com/IllfatedOptimisticFurseal-size_restricted.gif',
        screen: "Training_Severe"
    },
    {
        id: "4",
        title: "Wrist-Isolation Exercises",
        uri: 'https://i.makeagif.com/media/10-03-2015/3f7U-p.gif'
    },
    {
        id: "5",
        title: "Joint-Flexibility Exercises",
        uri: 'https://i.pinimg.com/originals/50/f6/38/50f6389efd5d41783e9bca4297a02ce7.gif'
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