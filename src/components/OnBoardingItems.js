import React from "react";
import { View, Text, StyleSheet, FlatList, useWindowDimensions, Image } from "react-native";
import Slides from "./Slides";

const OnBoardingItems = ({item}) => {
    const {width} = useWindowDimensions();

    return(
        <>
        <View style={[styles.container, {width}]}>
            <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}/>
            <View style={{ flex: 0.3, marginBottom: 100}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>

           

            </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        textAlign: 'center',
        color: '#24BB7F',
        
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
       
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
       
    },
});

export default OnBoardingItems;
