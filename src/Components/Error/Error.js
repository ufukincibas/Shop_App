import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import { Text } from "react-native-svg";

function Error(){
    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LottieView 
        source={require("../../../assets/Error.json")}
        autoPlay
        style={{ width: 200, height: 200 }}/>
       
        </View>
    )
}

export default Error;