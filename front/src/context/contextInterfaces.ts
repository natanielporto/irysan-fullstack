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
  pickedAsteroid: Asteroid | undefined;
  handleShowAllAsteroids: () => void;
  handleShowOneAsteroid: (id: string | null) => void;
  handlePickOneAsteroid: (id: string) => void;
  handleShowAsteroidsByDate: ({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate: string;
  }) => void;
  loading: boolean;
}

interface CloseApproachData {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: {
    kilometers_per_second: string;
    kilometers_per_hour: string;
    miles_per_hour: string;
  };
  miss_distance: {
    astronomical: string;
    lunar: string;
    kilometers: string;
    miles: string;
  };
  orbiting_body: string;
}

interface EstimatedDiameter {
  kilometers: {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
  };
  meters: {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
  };
  miles: {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
  };
  feet: {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
  };
}

export interface AsteroidNEO {
  links: {
    self: string;
  };
  id: string;
  neo_reference_id: string;
  name: string;
  name_limited: string;
  designation: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachData[];
}
