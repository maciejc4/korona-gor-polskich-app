export interface Trail {
  name: string;
  distance: string;
  duration: string;
  difficulty: 'łatwy' | 'umiarkowany' | 'trudny';
}

export interface MountainDetails {
  description: string;
  imageUrl: string;
  imageAttribution: string;
  latitude: number;
  longitude: number;
  trails: Trail[];
}

export interface Mountain {
  id: number;
  name: string;
  height: number;
  region: string;
  difficulty: 'łatwa' | 'średnia' | 'trudna';
  climbed: boolean;
  details: MountainDetails;
}

export interface ClimbedData {
  version: string;
  exportDate: string;
  climbedIds: number[];
}

export type SortColumn = 'name' | 'height' | 'region' | 'difficulty' | 'climbed';
export type SortDirection = 'asc' | 'desc';
