import {useCallback, useEffect, useState} from 'react';
import {IEpisode, IEpisodesInfo} from '../interface/episode';

export const useEpisode = (id: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [episode, setEpisode] = useState<IEpisode | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let url = `https://rickandmortyapi.com/api/episode/${id}`;
        const response = await fetch(url);
        const resData = await response.json();
        if (resData.characters) {
          let filledCharacters = [];
          for (let character of resData.characters) {
            const response2 = await fetch(character);
            const resData2 = await response2.json();
            filledCharacters.push(resData2);
          }
          const data = {...resData, characters: filledCharacters};
          setEpisode(data);
        } else {
          setError(resData.error);
        }
      } catch (err) {
        console.log('err', err);
        setError(JSON.stringify(error));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      setLoading(false);
      setError('');
      setEpisode(undefined);
    };
  }, []);

  return {episode, loading, error};
};

export default useEpisode;
