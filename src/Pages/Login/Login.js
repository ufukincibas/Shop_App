import React from "react";
import { View , Text , Image} from "react-native";



import styles from "./Login.styles"
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Formik } from "formik";

function Login(){
        function handleLogin(values) {
            console.log(values)
        }
    return(
    <View style={styles.container}>
        <View style={styles.logo_container}>
         <Image
          style={styles.logo}
          source={require("../../../assets/mandosi-logo.png")}/>
        </View>
     
        <Formik 
        initialValues={{username : '' , password : ''}}
        onSubmit={handleLogin}
        
        >
          
        {({handleSubmit , handleChange , values }) => (<View style={styles.body_container}>
        <Input placeholder="Kullanıcı adını giriniz..." 
        value={values.username}
        onChangeText={handleChange("username") }
        iconName="account"/>
           
           <Input placeholder="Şifrenizi giriniz..." 
           value={values.password}
           onChangeText={handleChange("password")}
           iconName="key"
           isSecure/>
           <Button text="Giriş Yap" onPress={handleSubmit}/>
        </View>)}
        </Formik>
    </View>
    )
}

export default Login;