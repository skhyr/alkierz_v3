import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../views/Home/Home';
import {BeverageList} from '../views/BeverageList';
import {UtilsStack} from './UtilsStack';

const Tabs = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Tabs.Screen
        name="Beverages"
        component={BeverageList}
        options={{headerShown: false}}
      />
      <Tabs.Screen
        name="Utils"
        component={UtilsStack}
        options={{headerShown: false}}
      />
    </Tabs.Navigator>
  );
};
