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
        
        <Stack.Screen name="ProductsPage" component={Products} />
        <Stack.Screen name="DetailsPage" component={Details} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;