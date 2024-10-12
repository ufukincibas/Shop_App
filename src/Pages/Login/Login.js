import React from "react";
import { View , Text , Image} from "react-native";

import styles from "./Login.styles"
import Input from "../../Components/Input";
import Button from "../../Components/Button";

function Login(){
    return(
    <View style={styles.container}>
        <View style={styles.logo_container}>
         <Image
          style={styles.logo}
          source={require("../../../assets/mandosi-logo.png")}/>
        </View>
        <View style={styles.body_container}>
        <Input placeholder="Kullanıcı adını giriniz..."/>
           <Input placeholder="Şifrenizi giriniz..."/>
           <Button text="Giriş Yap"/>
        </View>
    </View>
    )
}

export default Login;