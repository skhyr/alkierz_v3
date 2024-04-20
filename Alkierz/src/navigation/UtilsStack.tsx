import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Utils} from '../views/Utils/Utils';
import {Counter} from '../views/Utils/Counter';
import {Calculator} from '../views/Utils/Calculator';

const Stack = createNativeStackNavigator();

export const UtilsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Utils">
      <Stack.Screen
        name="Utils"
        component={Utils}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Counter" component={Counter} />
      <Stack.Screen name="Calculator" component={Calculator} />
    </Stack.Navigator>
  );
};
