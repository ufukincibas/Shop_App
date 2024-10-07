

import React from "react";
import { Text, View, FlatList , ActivityIndicator} from "react-native";
import Config from "react-native-config";

import ProductCard from "../../Components/ProductCard";
import useFetch from "../../hooks/useFetch";

function Products() {

const {loading,data,error} = useFetch(Config.API_URL) //HOOK yapısını bu sekilde cagırıp kullandık bana loading data ve error donuyor url i de bu sayfadan verdik

const renderProduct = ({item}) => <ProductCard product={item}/>;

if (loading){
    return <ActivityIndicator size="large"/> //loading true ise spin calistir
}
if (error){
    return <Text>{error}</Text> //error donerse hatayı yazdır kırmızı ekran yerine or:404
}
    return (
        <View>
            <FlatList
            data={data}
            renderItem={renderProduct}/>
           
        </View>
 );
}



export default Products;