import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';
import AntDesign from 'react-native-vector-icons/AntDesign';

const NextButton = ({ }) => {
    const size = 80;
    const strokeWidth = 2;  
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    return (
        <View style={styles.container}>
            <Svg width={size} size={size}>
                <Circle stroke="#E6E7E8" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
                <Circle stroke="#F4338F" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} strokeDasharray={circumference}
                strokeDashoffset={circumference- (circumference * 25) / 100} />
                
            </Svg>

            <TouchableOpacity style={styles.button}>
                <AntDesign name="arrowright" size={50} color="black"/>
            </TouchableOpacity>

                </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#24BB7F',
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default NextButton;