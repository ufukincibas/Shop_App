import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";


import styles from "./Button.styles";

function Button({text , onPress , loading}){
 return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        {loading ? 
        (<ActivityIndicator color="white" />) : (
        <Text style={styles.title}>{text}</Text>)}
        
    </TouchableOpacity>

 ) }

 export default Button;