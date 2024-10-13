import React from "react";
import { TextInput , View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from "./Input.styles"

function Input({placeholder , onChangeText , value , iconName , isSecure}){
   return (
     <View style={styles.container}>
    <TextInput
    style={styles.input} 
    placeholder={placeholder} 
    onChangeText={onChangeText} 
    value={value}
    secureTextEntry={isSecure}
    />
    <Icon name={iconName} size={25}/>
    </View>
    )
}

export default Input;