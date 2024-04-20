import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Utils = ({navigation}: any) => {
  return (
    <View>
      <Text>Utils</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
        <Text>Licznik Shotów</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Calculator')}>
        <Text>Kalkulator Bani</Text>
      </TouchableOpacity>
    </View>
  );
};
