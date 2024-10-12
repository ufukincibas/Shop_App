import React from "react";
import { TextInput , View } from "react-native";

import styles from "./Input.styles"

function Input({placeholder , onChangeText}){
   return (
     <View style={styles.container}>
    <TextInput placeholder={placeholder} onChangeText={onChangeText}/>
    </View>
    )
}

export default Input;