import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Card, Text} from 'react-native-paper';

export const Utils = ({navigation}: any) => {
  const cards = [
    {
      screen: 'Counter',
      title: 'Licznik Shotów',
    },
    {
      screen: 'Calculator',
      title: 'Kalkulator Bani',
    },
  ];
  return (
    <View>
      <Text style={styles.title} variant="displaySmall">
        Narzędzia
      </Text>
      <View style={styles.grid}>
        {cards.map(card => (
          <Card
            mode="elevated"
            style={styles.card}
            onPress={() => navigation.navigate(card.screen)}>
            <Card.Title title={card.title} />
          </Card>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    paddingVertical: 30,
  },
  grid: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
  },
});
