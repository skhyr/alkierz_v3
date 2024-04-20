import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/navigation/MainStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={new QueryClient()}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default App;
