import { useQuery } from "@tanstack/react-query"
import { Beverage } from "../../types/Beverage"

const BE_URL = 'http://localhost:8000/api/v1'

export const useQueryBeverage = (id: string) => {
  const query = useQuery({
    queryKey: ['beverage', id],
    queryFn: ()=> fetch(`${BE_URL}/beverages/${id}`).then(res => res.json()) as Promise<Beverage>
  })

  return query
}
