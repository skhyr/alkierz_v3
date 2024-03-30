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
      <View style={styles.text}>
      <Image source={{uri: p.image_url}} style={{ width: '100%', aspectRatio: 1}} />
        <Text>{p.name}</Text>
        <Text>{p.voltage}%</Text>
        <Text>{p.volume}</Text>
        <Text>{p.price ?? '-'}PLN</Text>
        <Text>{score?.toFixed(2) ?? '-'}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 5,
    flex: 0.5,
    backgroundColor: 'white',
    margin: 8
  },
  text: {

  }
});
