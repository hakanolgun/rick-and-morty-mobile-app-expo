export const getEpisodes = (page: string, name: string = '') => {
  return {
    method: 'GET',
    url: `episode?page=${page}&name=${name}`,
  };
};

export const getEpisode = (id: number) => {
  return {
    method: 'GET',
    url: `episode/${id}`,
  };
};

export const getCharacter = (id: string) => {
  return {
    method: 'GET',
    url: `character/${id}`,
  };
};
