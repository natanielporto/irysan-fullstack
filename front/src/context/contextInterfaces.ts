import { ReactNode } from "react";

export type SyncProviderProps = {
  children: ReactNode;
};

export interface ImageOfTheDay {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export interface Asteroid {
  absolute_magnitude_h: number;
  close_approach_data: [
    {
      close_approach_date_full: SVGStringList;
      orbiting_body: string;
      miss_distance: {
        kilometers: string;
      };
    }
  ];
  id: string;
  name: string;
  name_limited: string;
  link: { self: string };
  estimated_diameter: {
    kilometers: {
      estimated_diameter_max: number;
    };
  };
}

export interface OrderBy {
  orderBy: "one" | "many" | "favorite" | "range";
}
export interface SyncContextType {
  backgroundImage: ImageOfTheDay;
  allAsteroids: Asteroid[] | [];
  handleShowAllAsteroids: () => void;
  handleShowOneAsteroid: (id: string | null) => void;
  handleShowAsteroidsByDate: ({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate: string;
  }) => void;
  loading: boolean;
}
