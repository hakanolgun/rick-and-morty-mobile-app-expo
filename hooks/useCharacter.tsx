import {useCallback, useEffect} from 'react';
import {getCharacter} from '../api/api';
import useAxios from './useAxios';

export const useCharacter = (id: string) => {
  const [res, loading, err, fetchData] = useAxios();

  const fetchAgain = useCallback(
    async (ID: string) => {
      if (ID !== '') {
        await fetchData(getCharacter(ID));
      }
    },
    [fetchData],
  );

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      fetchAgain(id);
    }
    return () => {
      ignore = true;
    };
  }, [fetchAgain, id]);
  return [res, loading, err, fetchAgain];
};

export default useCharacter;
