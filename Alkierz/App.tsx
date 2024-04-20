import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/navigation/MainStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <PaperProvider>
        <QueryClientProvider client={new QueryClient()}>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </QueryClientProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

export default App;
