import { useQuery } from "@tanstack/react-query"
import { Beverage } from "../../types/Beverage"

const BE_URL = 'http://localhost:8000/api/v1'

export const useQueryBeverages = () => {
  const query = useQuery({
    queryKey: ['beverages'],
    queryFn: ()=> fetch(`${BE_URL}/beverages/`).then(res => res.json()) as Promise<Beverage[]>
  })

  return query
}
