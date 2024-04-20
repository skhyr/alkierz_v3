import {useQuery} from '@tanstack/react-query';
import {Beverage} from '../../types/Beverage';
import {BE_URL} from '../../../BE_URL';

export const useQueryBeverages = () => {
  const query = useQuery({
    queryKey: ['beverages'],
    queryFn: () =>
      fetch(`${BE_URL}/beverages/`, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => res.json()) as Promise<Beverage[]>,
  });

  return query;
};
