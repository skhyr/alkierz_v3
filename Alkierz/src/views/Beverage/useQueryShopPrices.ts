import { useQuery } from "@tanstack/react-query"
import { Price } from "../../types/Price"

const BE_URL = 'http://localhost:8000/api/v1'

export const useQueryShopPrices = (id: string) => {
  const query = useQuery({
    queryKey: ['beverage prices', id],
    queryFn: ()=> fetch(`${BE_URL}/beverages/${id}/prices`).then(res => res.json()) as Promise<Price[]>
  })

  return query
}
