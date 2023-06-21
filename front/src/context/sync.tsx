import { createContext, useState, useEffect, useCallback } from "react";
import {
  Asteroid,
  ImageOfTheDay,
  SyncProviderProps,
  SyncContextType,
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
  console.log(
    "🚀 ~ file: sync.tsx:21 ~ SyncProvider ~ allAsteroids:",
    allAsteroids
  );
  const [loading, setLoading] = useState<boolean>(false);

  const handleShowAllAsteroids = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${server}/list`);
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

  const handleShowAsteroidsByDate = useCallback(
    async ({ startDate, endDate }: { startDate: string; endDate: string }) => {
      if (startDate === "" || endDate === "") {
        alert("You must select start and end dates.");
      }
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
    []
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
    handleShowAllAsteroids,
    handleShowOneAsteroid,
    handleShowAsteroidsByDate,
  };

  return <SyncContext.Provider value={data}>{children}</SyncContext.Provider>;
}
