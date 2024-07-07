import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, View , Animated} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';
import AntDesign from 'react-native-vector-icons/AntDesign';

const NextButton = ({ percentage, scrollTo }) => {
    const size = 80;
    const strokeWidth = 2;  
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);

    useEffect(() => {
        animation(percentage);
     }, [ percentage ] );

     useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference * value.value) / 100;
            if (progressRef?.current) {
                progressRef.current.setNativeProps({
                    strokeDashoffset,
                });
            }
        }, [percentage]);

        return () => {
            progressAnimation.removeAllListeners();
        };
     });

    const animation = (toValue) => { 
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: false,
        }).start();
      };

    return (
        <View style={styles.container}>
            <Svg width={size} size={size}>
                <Circle stroke="#E6E7E8" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
                <Circle stroke="#F4338F" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} strokeDasharray={circumference}
                />
                
            </Svg>

            <TouchableOpacity style={styles.button} onPress={scrollTo}>
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