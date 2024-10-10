

import React from "react";
import { Text, View, FlatList } from "react-native";
import Config from "react-native-config";

import ProductCard from "../../Components/ProductCard";
import useFetch from "../../hooks/useFetch";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error";

function Products({navigation}) {

const {loading,data,error} = useFetch(Config.API_URL) //HOOK yapısını bu sekilde cagırıp kullandık bana loading data ve error donuyor url i de bu sayfadan verdik

const renderProduct = ({item}) => 
<ProductCard product={item} onSelect={ () => onProductSelect(item.id)}/>;

const onProductSelect = id => {
    navigation.navigate('DetailsPage' , {id})}

if (loading){
    return <Loading/> //loading true ise spin calistir
}
if (error){
    return <Error/>
   //error donerse hatayı yazdır kırmızı ekran yerine or:404
}
    return (    <FlatList data={data} renderItem={renderProduct} /> );
}

export default Products;