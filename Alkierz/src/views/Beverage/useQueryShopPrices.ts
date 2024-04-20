import {useQuery} from '@tanstack/react-query';
import {Price} from '../../types/Price';
import {BE_URL} from '../../../BE_URL';

export const useQueryShopPrices = (id: string) => {
  const query = useQuery({
    queryKey: ['beverage prices', id],
    queryFn: () =>
      fetch(`${BE_URL}/beverages/${id}/prices`).then(res =>
        res.json(),
      ) as Promise<Price[]>,
  });

  return query;
};
