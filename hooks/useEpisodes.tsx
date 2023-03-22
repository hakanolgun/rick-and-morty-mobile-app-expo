import {useCallback, useEffect} from 'react';
import {getEpisodes} from '../api/api';
import useAxios from './useAxios';

export const useEpisodes = (page: string, name: string = '') => {
  const [res, loading, err, fetchData] = useAxios();

  const fetchAgain = useCallback(
    async (p: string, n: string) => {
      await fetchData(getEpisodes(p, n));
    },
    [fetchData],
  );

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      fetchAgain(page, name);
    }
    return () => {
      ignore = true;
    };
  }, [fetchAgain, page, name]);
  return [res, loading, err, fetchAgain];
};

export default useEpisodes;
