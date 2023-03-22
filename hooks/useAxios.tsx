import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

export const url = 'https://rickandmortyapi.com/api/';

axios.defaults.baseURL = url;

interface IAxiosParams {
  method: string;
  url: any;
}

export const useAxios = () => {
  const [res, setRes] = useState<any>(undefined);
  const [err, setErr] = useState<any>('');
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (params: IAxiosParams) => {
    try {
      setErr('');
      setLoading(true);
      const result = await axios.request(params);
      setRes(result.data);
    } catch (error: any) {
      const msg = error.response.data.error ?? 'Something went wrong!';
      setErr(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    return () => {
      setRes(undefined);
      setErr('');
      setLoading(false);
    };
  }, []);

  return [res, loading, err, fetchData];
};

export default useAxios;
