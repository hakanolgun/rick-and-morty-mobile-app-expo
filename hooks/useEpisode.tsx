import {useEffect} from 'react';
import {getEpisode} from '../api/api';
import useAxios from './useAxios';

export const useEpisode = (id: number) => {
  const [res, loading, err, fetchData] = useAxios();

  useEffect(() => {
    let control = true;
    const getData = async () => {
      await fetchData(getEpisode(id));
    };
    if (control) {
      getData();
    }

    return () => {
      control = false;
    };
  }, [fetchData, id]);

  return [res, loading, err];
};

export default useEpisode;
