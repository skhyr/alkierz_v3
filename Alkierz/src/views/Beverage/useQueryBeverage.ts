import {useQuery} from '@tanstack/react-query';
import {Beverage} from '../../types/Beverage';
import {BE_URL} from '../../../BE_URL';

export const useQueryBeverage = (id: string) => {
  const query = useQuery({
    queryKey: ['beverage', id],
    queryFn: () =>
      fetch(`${BE_URL}/beverages/${id}`).then(res =>
        res.json(),
      ) as Promise<Beverage>,
  });

  return query;
};
