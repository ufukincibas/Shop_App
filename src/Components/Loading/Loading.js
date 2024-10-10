import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        source={require('../../../assets/Loading.json')}
        autoPlay
        loop
        style={{ width: 200, height: 200 }} // Stil ekliyoruz
      />
    </View>
  );
}

export default Loading;
