import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Beverage } from "../../types/Beverage";
import { useNavigation } from "@react-navigation/native";

type Props = Beverage

export const BeverageElement = (p: Props) => {
  const navigation = useNavigation();
  // @ts-ignore
  const handlePress = () => navigation.push('Beverage', {beverage_id: p.id})
  const score = p.price && (p.volume*p.voltage)/p.price/100
  return(
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image source={{uri: p.image_url}} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.name}>{p.name}</Text>
      <View style={styles.stats}>
        <Text>{p.voltage}%</Text>
        <Text>{p.volume}ml</Text>
        <Text>{p.price ?? '-'}PLN</Text>
      </View>
      <Text>{score?.toFixed(2) ?? '-'} p.b.</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    flex: 0.5,
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 5
  },
  image: {
    height: 150,
    aspectRatio: 1,
    marginRight: 5
  },
  name: {
    fontWeight: '600',
    marginVertical: 5
  },
  text: {
    flex: 1

  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10
  }
});
