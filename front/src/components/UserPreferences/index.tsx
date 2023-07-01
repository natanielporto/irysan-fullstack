import { useContext } from "react";
import { SyncContext } from "../../context/sync";
import * as S from "./styles";

export function UserPreferences() {
  const { pickedAsteroid } = useContext(SyncContext);
  console.log(pickedAsteroid);
  return (
    <S.Container>
      {pickedAsteroid && <div>{JSON.stringify(pickedAsteroid)}</div>}
    </S.Container>
  );
}
