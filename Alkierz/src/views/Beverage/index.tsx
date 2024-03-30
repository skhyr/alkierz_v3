import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import { useQueryBeverage } from "./useQueryBeverage";
import { useRoute } from "@react-navigation/native";
import { useQueryShopPrices } from "./useQueryShopPrices";

export const Beverage = () => {
  const {params} = useRoute();
  // @ts-ignore
  const {data} = useQueryBeverage(params.beverage_id)
  // @ts-ignore
  const {data: prices} = useQueryShopPrices(params.beverage_id)
  console.log(prices)
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{data?.name}</Text>
      <Image source={{uri: data?.image_url}} height={400} />
      <View style={styles.stats}>
      <Text style={styles.stat}>{data?.voltage}%</Text>
      <Text style={styles.stat}>{data?.volume}ml</Text>
      <Text style={styles.stat}>{data?.price}zł</Text>
      </View>
      <View>
      <Text>Ceny:</Text>
      <FlatList
        data={prices}
        renderItem={({item}) => <View style={styles.priceRow}>
        <Text>{item.shop.name}</Text>
        <Text>{item.value}zł</Text>
        </View>}
        keyExtractor={item => item.id}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 15,
    letterSpacing: 1,
    textAlign: 'center'
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  stat: {
    fontSize: 20,
    marginVertical: 10
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
