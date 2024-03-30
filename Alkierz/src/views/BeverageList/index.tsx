import { FlatList, StyleSheet, View } from "react-native"
import { useQueryBeverages } from "./useQuerBeverages";
import { BeverageElement } from "./BeverageElement";

export const BeverageList = () => {
  const {data} = useQueryBeverages()
  return(
    <FlatList
      numColumns={2}
      data={data}
      renderItem={({item}) => <BeverageElement {...item} />}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={()=> <View style={{width: 5, height: 5}} />}
    />
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
