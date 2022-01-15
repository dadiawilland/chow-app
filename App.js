import React, { useState } from "react";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const getFonts = () =>
  Font.loadAsync({
    "poppins-regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "poppins-light": require("./src/assets/fonts/Poppins-Light.ttf"),
    "poppins-medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "poppins-semibold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
  });

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home, navigationOptions: { headerShown:false }
  },
  Login: {
    screen: Login, navigationOptions: { headerShown:false }
  },
  Register: {
    screen: Register, navigationOptions: { headerShown:false }
  }
},{
  initialRouteName: "Home"
},{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });
  
const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      // <View>
        <AppContainer />
      // {/* </View> */}
      );
  } else {
    return (
      <AppLoading startAsync={getFonts} onError={() => setFontsLoaded(false)} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

