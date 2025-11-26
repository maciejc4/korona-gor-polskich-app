export interface Mountain {
  id: number;
  name: string;
  height: number;
  region: string;
  difficulty: 'łatwa' | 'średnia' | 'trudna';
  climbed: boolean;
}

export type SortColumn = 'name' | 'height' | 'region' | 'difficulty' | 'climbed';
export type SortDirection = 'asc' | 'desc';
