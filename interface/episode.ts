export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface IEpisodesInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
