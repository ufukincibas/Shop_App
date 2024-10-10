import React from "react";
import { View , Text , Image } from "react-native";
import Config from "react-native-config";

import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";

import styles from "./Details.styles";
import useFetch from "../../hooks/useFetch";

function Details({route}){
    const {id} = route.params;
    const {loading , error , data} = useFetch(Config.API_URL + "/" +id )
   

    if (loading){
        return <Loading/> //loading true ise spin calistir
    }
    if (error){
        return <Error/>
       //error donerse hatayı yazdır kırmızı ekran yerine or:404
    }

    return(
        <View style={styles.container}>
            <Image source={{uri : data.image}} style={styles.image} />
            <View style={styles.body_container}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.desc}>{data.description}</Text>
            <Text style={styles.price}>{data.price}  TL</Text>
            </View>
        </View>
    )
}

export default Details;