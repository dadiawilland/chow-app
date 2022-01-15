import React, { useEffect, useState } from 'react';
import { Animated, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home(props) {

  const [value] = useState(new Animated.Value(0))

  useEffect(()=>{
    Animated.timing(value, {
        toValue: 200,
        duration: 960,
        useNativeDriver: false
    }).start()
  }, [value]) 

  return (
    <View style={styles.container}>
        <StatusBar style="dark" />
        <ImageBackground style={styles.image} source={require('../assets/img/home-screen/home.png')} resizeMode="cover">
            <Animated.View style={[styles.popupContainer, {height: value}]}>
                <View>
                    <Text style={styles.headerFont}>Let's get started</Text>
                    <Text style={styles.subHeaderFont}>Order your food now, order chow!</Text>
                </View>
                {/* create button component */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styles.buttonFont}>Join now</Text>
                </TouchableOpacity>
            </Animated.View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'poppins-regular',
    backgroundColor: '#FFFEFE',
    flex: 1,
  },
  popupContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFFEFE',
    shadowColor: '#6A6A6A',
    shadowOpacity: 0.1,
    shadowOffset: {
      height: -2,
      width: 12
    },
    shadowRadius: 12,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 24,
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: 275,
    height: 50,
    backgroundColor: '#F64747',
    borderRadius: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  headerFont: {
    fontFamily: 'poppins-semibold',
    fontSize: 32,
    textAlign: 'center',
    color: '#373535'
  },
  subHeaderFont: {
    fontFamily: 'poppins-medium',
    fontSize: 16,
    textAlign: 'center',
    color: '#CACACA'
  },
  buttonFont: {
    fontFamily: 'poppins-medium',
    fontSize: 16,
    color: '#FFFEFA',
    alignSelf: 'center'
  }
});
