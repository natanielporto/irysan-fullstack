import { useContext } from "react";
import { SyncContext } from "../../context/sync";
import * as S from "./styles";
import { AsteroidNEO } from "../../context/contextInterfaces";

export function UserPreferences() {
  const { pickedAsteroid } = useContext(SyncContext);

  const oneAsteroidPicked = () => {
    if (pickedAsteroid) {
      const {
        links: { self },
        name,
        absolute_magnitude_h,
        estimated_diameter,
        close_approach_data,
      } = pickedAsteroid as unknown as AsteroidNEO;

      const {
        kilometers: { estimated_diameter_min, estimated_diameter_max },
      } = estimated_diameter;

      const { relative_velocity, close_approach_date_full } =
        close_approach_data[0];

      const { kilometers_per_second, kilometers_per_hour, miles_per_hour } =
        relative_velocity;

      return (
        <div>
          <img src={self} alt="" />
          <p>{name}</p>
          <p>{absolute_magnitude_h}</p>
          <p>{estimated_diameter_min}</p>
          <p>{estimated_diameter_max}</p>
          <p>{close_approach_date_full}</p>
          <p>{kilometers_per_second}</p>
          <p>{kilometers_per_hour}</p>
          <p>{miles_per_hour}</p>
        </div>
      );
    }
  };
  return (
    <S.Container>
      <>
        {oneAsteroidPicked()}
        {/* {pickedAsteroid && <div>{JSON.stringify(pickedAsteroid)}</div>} */}
      </>
    </S.Container>
  );
}
