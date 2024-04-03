import { FlatList, Text } from "react-native"
import { useQueryBeverages } from "./useQuerBeverages";
import { BeverageElement } from "./BeverageElement";

export const BeverageList = () => {
  const {data, refetch, isRefetching, error} = useQueryBeverages()
  console.log(data, error)
  return(
    <FlatList
      data={data}
      renderItem={({item}) => <BeverageElement {...item} />}
      keyExtractor={item => item.id}
      refreshing={isRefetching}
      onRefresh={refetch}
    />
  )
}

