import { createContext, useState, useEffect, useCallback } from "react";
import {
  Asteroid,
  ImageOfTheDay,
  SyncProviderProps,
  SyncContextType,
  OrderBy,
} from "./contextInterfaces";

export const SyncContext = createContext<SyncContextType>(
  {} as SyncContextType
);

export function SyncProvider({ children }: SyncProviderProps) {
  const server = "http://localhost:3333/asteroids";

  const [backgroundImage, setBackgroundImage] = useState<ImageOfTheDay>(
    {} as ImageOfTheDay
  );

  const [asteroidId, setAsteroidId] = useState<string>("");
  const [allAsteroids, setAllAsteroids] = useState<Asteroid[]>([]);
  const [pickedAsteroid, setPickedAsteroid] = useState<Asteroid>();
  const [orderBy, setOrderBy] = useState<OrderBy>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleShowAllAsteroids = useCallback(async () => {
    setLoading(true);

    setAllAsteroids([]);

    try {
      const response = await fetch(`${server}/list`);
      const data = await response.json();
      setAllAsteroids([data]);
      setLoading(false);
      return data;
    } catch (error) {
      console.log("Error fetching list of asteroids:", error);
      setLoading(false);
      return [];
    }
  }, []);

  const handleShowOneAsteroid = useCallback(async (id: string | null) => {
    if (asteroidId === "") alert("Select one asteroid first, please.");
    try {
      setLoading(true);
      const response = await fetch(`${server}/search/${id}`);
      const data = await response.json();
      setAllAsteroids(data);
      setLoading(false);
      return data;
    } catch (error) {
      console.log("Error fetching list of asteroids:", error);
      setLoading(false);
      return [];
    }
  }, []);

  const handlePickOneAsteroid = useCallback(
    async (id: string | null) => {
      if (allAsteroids) {
        const selectedAsteroid = Object.entries(allAsteroids[0]).filter(
          (asteroid) => {
            return asteroid[1].id === id;
          }
        )[0];

        return setPickedAsteroid(selectedAsteroid[1]);
      }

      return null;
    },
    [allAsteroids]
  );

  const handleShowAsteroidsByDate = useCallback(
    async ({ startDate, endDate }: { startDate: string; endDate: string }) => {
      if (startDate === "" || endDate === "") {
        alert("You must select start and end dates.");
      }

      setAllAsteroids([]);

      try {
        setLoading(true);
        const response = await fetch(`${server}/${startDate}/${endDate}`);
        const data = await response.json();
        setAllAsteroids(data);
        setLoading(false);
        return data;
      } catch (error) {
        console.log("Error fetching list of asteroids:", error);
        setLoading(false);
        return [];
      }
    },
    [allAsteroids]
  );

  useEffect(() => {
    setLoading(true);
    fetch(`${server}/imageOfTheDay`)
      .then((res) => res.json())
      .then((data) => {
        setBackgroundImage(data);
      })
      .catch((error) => {
        console.log("Error fetching image of the day:", error);
      });
    setLoading(false);
  }, []);

  const data: SyncContextType = {
    loading,
    backgroundImage,
    allAsteroids,
    pickedAsteroid,
    handleShowAllAsteroids,
    handleShowOneAsteroid,
    handleShowAsteroidsByDate,
    handlePickOneAsteroid,
  };

  return <SyncContext.Provider value={data}>{children}</SyncContext.Provider>;
}
