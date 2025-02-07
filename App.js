import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{  headerShown: false, }}
          
        >
        <Stack.Screen name="Home" component={HomeScreen} headerShown= 'false' />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
