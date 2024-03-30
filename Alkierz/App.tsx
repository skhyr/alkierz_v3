import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { BeverageList } from './src/views/BeverageList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Beverage } from './src/views/Beverage';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
  <QueryClientProvider client={new QueryClient()}>
  <NavigationContainer>
      <Stack.Navigator initialRouteName="BeverageList">
        <Stack.Screen name="BeverageList" component={BeverageList} />
        <Stack.Screen name="Beverage" component={Beverage} />
      </Stack.Navigator>
    </NavigationContainer>
    </QueryClientProvider>
  )
}

export default App;
