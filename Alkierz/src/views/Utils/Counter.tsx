import {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from 'react-native-paper';

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem('counter')
      .then(value => (value ? parseInt(value) : null))
      .then(value => value && setCount(value));
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('counter', count.toString());
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttons}>
        <Button
          mode="contained"
          style={{...styles.button}}
          onPress={() => setCount(Math.max(count - 1, 0))}>
          <Text>-</Text>
        </Button>
        <Button
          mode="contained"
          style={{...styles.button}}
          onPress={() => setCount(0)}>
          <Text>Zeruj</Text>
        </Button>
        <Button
          mode="contained"
          style={{...styles.button}}
          onPress={() => setCount(count + 1)}>
          <Text>+</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  count: {
    fontSize: 80,
    fontWeight: '800',
  },
  buttons: {
    flexDirection: 'row',
    gap: 18,
    paddingHorizontal: 18,
  },
  button: {},
});
