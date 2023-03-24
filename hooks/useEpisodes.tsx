import {useCallback, useEffect, useState} from 'react';
import {IEpisode, IEpisodesInfo} from '../interface/episode';

export const useEpisodes = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState<IEpisodesInfo | undefined>(undefined);
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  const fetchEpisodes = useCallback(async (p: number, n: string, a: boolean) => {
    setLoading(true);
    try {
      let url = `https://rickandmortyapi.com/api/episode/?page=${p}&name=${n}`;
      const response = await fetch(url);
      const resData = await response.json();
      if (resData.info) {
        setInfo(resData.info);
        if (a) {
          setEpisodes(p => [...p, ...resData.results]);
        } else {
          setEpisodes(resData.results);
        }
      } else {
        setError(resData.error);
      }
    } catch (err) {
      setError(JSON.stringify(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    return () => {
      setLoading(false);
      setError('');
      setInfo(undefined);
      setEpisodes([]);
    };
  }, []);

  return {info, episodes, loading, error, fetchEpisodes};
};

export default useEpisodes;
