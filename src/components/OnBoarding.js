import React, {useEffect, useRef} from "react";
import { View, Text, StyleSheet, FlatList, Animated } from "react-native";
import Slides from "./Slides";
import OnBoardingItems from "./OnBoardingItems";
import Paginator from "./Paginator";
import NextButton from "./NextButton";

const OnBoarding = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);  
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
            <FlatList data={Slides} 
            renderItem={ ({item}) => <OnBoardingItems item={item}/> }
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: {x: scrollX}}}],
            {useNativeDriver: false}
            )}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef} />

            </View>
                <Paginator data={Slides} scrollX={scrollX}/>
                <NextButton/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default OnBoarding;
