// Screens/Learn/Home.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OnBoarding from '../components/OnBoarding';

const Home = () => {
  
  return (
    <>
    
      <View style={styles.container}>
        <OnBoarding />
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
  text: {
    fontSize: 24,
  },
});

export default Home;
