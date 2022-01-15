import React, { useState, useEffect } from 'react';
import { TextInput, Image, StyleSheet, Text, View } from 'react-native';

export default function InputText(props) {

    const [isActive, setIsActive] = useState(false)
    const [value, setValue] = useState('')

    return (
        <View style={styles.input_container_parent}>
            <View style={styles.input_container}>
                <Image style={[styles.input_icon, {display: isActive || value !== '' ? 'none' : 'flex'}]} source={props.icon} />
                <Text style={[styles.input_label, {fontSize: isActive || value !== '' ? 16 : 22, color: isActive || value !== '' ? '#6A6A6A' : '#373535'}]}>{props.label}</Text>
            </View>
            <TextInput onFocus={() => setIsActive(true)} 
                        secureTextEntry={props.isPassword}
                        onEndEditing={() => setIsActive(false)}
                        key={props.label}
                        onChangeText={val => setValue(val)}
                        value={value}
                        autoCapitalize={props.isAutoCaps ? 'none' : null}
                        style={[styles.input_text, {height: isActive || value !== '' ? 32 : 16, 
                                borderBottomColor: isActive || value !== '' ? '#373535' : '#F4F4F4',
                                paddingVertical: isActive || value !== '' ? 0 : 12}]}/>
            <Image style={[styles.input_icon_inline, {display: isActive || value !== '' ? 'flex' : 'none'}]} source={props.icon}/>
        </View>
    );
}

const styles = StyleSheet.create({
  input_container_parent: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: 45
  },
  input_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input_icon: {
    height: 18,
    width: 18,
    marginRight: 12,
    resizeMode: 'contain',
  },
  input_label: {
    fontFamily: 'poppins-semibold',
    // lineHeight: 22,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 22,
  },
  input_text: {
    fontFamily: 'poppins-regular',
    borderBottomWidth: 1,
    fontSize: 18,
    paddingLeft: 30,
  }, 
  input_icon_inline: {
    height: 18,
    width: 18,
    resizeMode:'contain',
    position: 'absolute',
    left: 6,
    bottom: 10
  }
  
});
