import React, { useEffect, useState } from 'react';
import { Animated, TextInput, Switch, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InputText from '../components/InputText'
// test
export default function Register(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <Image style={styles.image} source={require('../assets/img/img_logo_type.png')} />
            <InputText label={'Username'} icon={require('../assets/img/img_username.png')}/>
            <InputText label={'Email'} isAutoCaps={true} icon={require('../assets/img/img_email.png')}/>
            <InputText label={'Password'} isPassword={true} icon={require('../assets/img/img_password.png')}/>
            <View style={styles.terms_container}>
              <Text style={styles.terms_font}>I read and agree to
              {/* add link to terms */}
              <Text style={styles.terms_link_font}> Terms and Condition</Text>
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#D2E9E6" }}
                thumbColor={isEnabled ? "#114743" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <TouchableOpacity style={styles.register_btn_container} >
              <Text style={styles.register_btn_font}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.login_btn_container} onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.login_btn_font}>Already have an account</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'poppins-regular',
    backgroundColor: '#FFFEFE',
    flex: 1,
  },
  image: {
    width: 115,
    height: 50,
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 60
  },
  terms_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '7.5%',
  },
  terms_font: {
    fontFamily: 'poppins-semibold',
    fontSize: 12,
    color: '#373535'
  },
  terms_link_font: {
    fontFamily: 'poppins-semibold',
    fontSize: 12,
    color: '#F64747',
  },
  register_btn_container: {
    width: 275,
    height: 50,
    backgroundColor: '#373535',
    borderRadius: 1,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 55,
  },
  register_btn_font: {
    fontFamily: 'poppins-medium',
    fontSize: 16,
    color: '#FFFEFA',
    alignSelf: 'center'
  },
  login_btn_container: {
    width: 275,
    height: 50,
    backgroundColor: '#FEFEFE',
    borderRadius: 1,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 55,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    position: 'absolute',
    bottom: 40
  },
  login_btn_font: {
    fontFamily: 'poppins-medium',
    fontSize: 16,
    color: '#373535',
    alignSelf: 'center'
  }
});
