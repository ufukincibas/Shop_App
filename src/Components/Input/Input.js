import React from "react";
import { TextInput , View } from "react-native";

import styles from "./Input.styles"

function Input({placeholder , onChangeText , value}){
   return (
     <View style={styles.container}>
    <TextInput placeholder={placeholder} onChangeText={onChangeText} value={value}/>
    </View>
    )
}

export default Input;