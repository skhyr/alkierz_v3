import {useEffect, useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        <Pressable
          style={{...styles.button, flex: 1}}
          onPress={() => setCount(Math.max(count - 1, 0))}>
          <Text>-</Text>
        </Pressable>
        <Pressable
          style={{...styles.button, flex: 2}}
          onPress={() => setCount(0)}>
          <Text>zeruj</Text>
        </Pressable>
        <Pressable
          style={{...styles.button, flex: 1}}
          onPress={() => setCount(count + 1)}>
          <Text>+</Text>
        </Pressable>
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
  button: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
});
