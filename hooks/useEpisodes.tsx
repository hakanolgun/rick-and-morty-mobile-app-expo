import {useCallback, useEffect, useState} from 'react';
import {IEpisode, IEpisodesInfo} from '../interface/episode';

export const useEpisodes = (page: string, name: string = '', add: boolean) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState<IEpisodesInfo | undefined>(undefined);
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  const fetchEpisodes = useCallback(async (p: string, n: string, a: boolean) => {
    setLoading(true);
    try {
      let url = `https://rickandmortyapi.com/api/episode/?`;
      p ? (url = url + `page=${p}`) : null;
      n ? (url = url + `name=${n}`) : null;
      const response = await fetch(url);
      const resData = await response.json();
      setInfo(resData.info);
      if (a) {
        setEpisodes(p => [...p, ...resData.results]);
      } else {
        setEpisodes(resData.results);
      }
    } catch (err) {
      console.log('error', err);
      setError(JSON.stringify(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      fetchEpisodes(page, name, add);
    }
    return () => {
      setLoading(false);
      setError('');
      ignore = true;
    };
  }, []);

  return {info, episodes, loading, error, fetchEpisodes};
};

export default useEpisodes;
