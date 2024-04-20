import {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';

export const Calculator = () => {
  const [voltage, setVoltage] = useState<string>('');
  const [volume, setVolume] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const calcScore = () => {
    if (!voltage || !volume || !price) return 0;
    const voltageNum = parseFloat(voltage);
    const volumeNum = parseFloat(volume);
    const priceNum = parseFloat(price);
    return (voltageNum * volumeNum * 0.01) / priceNum;
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TextInput
        label="Volume (ml)"
        keyboardType="numeric"
        value={volume}
        onChangeText={setVolume}
      />
      <TextInput
        label="Voltage (%)"
        keyboardType="numeric"
        value={voltage}
        onChangeText={setVoltage}
      />
      <TextInput
        label="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <Text style={styles.count}>{calcScore()?.toFixed(2)}</Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {},
  count: {
    alignSelf: 'center',
    fontSize: 80,
    fontWeight: '800',
  },
});
