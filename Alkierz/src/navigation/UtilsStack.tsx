import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Utils} from '../views/Utils/Utils';

const Stack = createNativeStackNavigator();

export const UtilsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Utils">
      <Stack.Screen
        name="Utils"
        component={Utils}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
