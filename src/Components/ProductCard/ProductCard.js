import React from "react";
import { Text , View , Image } from "react-native";
import styles from './ProductCard.styles';

function ProductCard({product}){
    return(
     <View style={styles.container}>
            <Image 
            source={{uri: product.image}}
            style={styles.image}
            />
             <View style={styles.body_container}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price} TL</Text>
            </View>
    </View>
       
    )
}

export default ProductCard;