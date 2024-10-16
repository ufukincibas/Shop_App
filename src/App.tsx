import React from 'react'; 
import {Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './Pages/Products';
import Details from './Pages/Details';
import Loading from './Components/Loading/Loading';
import Login from './Pages/Login';



import { useDispatch, useSelector } from 'react-redux';



const Stack = createNativeStackNavigator();

function App() {

  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="ProductsPage"
            component={Products}
            options={{
          
              headerStyle: {backgroundColor: 'white'},
              headerTitleStyle: {color: 'salmon'},
            }}
          />
          <Stack.Screen
            name="DetailsPage"
            component={Details}
            options={{
            
              headerStyle: {backgroundColor: '#ffe5d1'},
              headerTitleStyle: {color: '#e56903', fontWeight: 'bold'},
              headerTintColor: '#e56903',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;