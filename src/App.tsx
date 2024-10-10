import React from 'react'; 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './Pages/Products';
import Details from './Pages/Details';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="ProductsPage" component={Products} options={{
          title:"ürünler",
          headerStyle:{backgroundColor: "#64b5f6"},
          headerTitleStyle:{color:'white'}
        }} />
        <Stack.Screen name="DetailsPage" component={Details} options={{
          title:"Detay" ,
          headerStyle:{backgroundColor: "#64b5f6"},
          headerTitleStyle:{color:"white"},
          headerTintColor: 'white'
        }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;