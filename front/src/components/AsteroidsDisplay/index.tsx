import { useContext, useMemo } from "react";
import { AsteroidsTag } from "../AsteroidTag";
import * as S from "./styles";
import { SyncContext } from "../../context/sync";

export function AsteroidsDisplay() {
  const { allAsteroids } = useContext(SyncContext);

  const renderAsteroidsTags = useMemo(
    () =>
      Object?.entries(allAsteroids).map((asteroids) =>
        Object.entries(asteroids[1]).map((asteroid) => (
          <AsteroidsTag key={asteroid[1].name} {...asteroid[1]} />
        ))
      ),
    [allAsteroids]
  );

  return <S.Container>{renderAsteroidsTags}</S.Container>;
}
