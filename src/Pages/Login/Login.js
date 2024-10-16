import React from "react";
import { View, Text, Image, Alert } from "react-native";
import { useSelector, useDispatch } from 'react-redux'; 
import { Formik } from "formik";
import styles from "./Login.styles";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import usePost from "../../hooks/usePost";
import Config from "react-native-config";



const Login = ({ navigation }) => {
  const { data, loading, error, post } = usePost();
 const dispatch = useDispatch();

  const handleLogin = async (values) => {
    try {
      await post(Config.API_AUTH_URL + "/login", values);  // Asenkron istek
    } catch (e) {
      console.log(e);  // Hata olursa konsola yazdır
    }
  };

  if (error) {
    Alert.alert("Shopping", "Bir hata oluştu");
  }
  
  if (data) {
    if (data.status === "Error") {
      Alert.alert("Shopping", "Kullanıcı Bulunamadı");
    } else {
     dispatch({ type: 'SET_USER', payload: { user: data.user } });  // Gelen kullanıcıyı kaydet
     navigation.navigate("ProductsPage")
   
    }
  }
  


  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require("../../../assets/mandosi-logo.png")} />
      </View>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı Adınızı giriniz..."
              value={values.username}
              onChangeText={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Şifrenizi giriniz..."
              value={values.password}
              onChangeText={handleChange('password')}
              iconName="key"
              isSecure
            />
            <Button 
              text="Giriş yap" 
              onPress={handleSubmit} 
              loading={loading} 
              disabled={loading}  // Yükleniyorsa buton disable
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

export default Login;



const user = 
{
  "address": {
      "geolocation": {
          "lat": "-37.3159",
          "long": "81.1496"
      },
      "city": "kilcoole",
      "street": "new road",
      "number": 7682,
      "zipcode": "12926-3874"
  },
  "id": 1,
  "email": "john@gmail.com",
  "username": "johnd",
  "password": "m38rmF$",
  "name": {
      "firstname": "john",
      "lastname": "doe"
  },
  "phone": "1-570-236-7033",
  "__v": 0
}