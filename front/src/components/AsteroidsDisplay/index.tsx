import { useContext, useMemo } from "react";
import { AsteroidsTag } from "../AsteroidTag";
import * as S from "./styles";
import { SyncContext } from "../../context/sync";
import { Asteroid } from "../../context/contextInterfaces";

export function AsteroidsDisplay() {
  const { allAsteroids } = useContext(SyncContext);
  console.log(
    "🚀 ~ file: index.tsx:9 ~ AsteroidsDisplay ~ allAsteroids:",
    allAsteroids
  );

  const renderAsteroidsTags = useMemo(
    () =>
      allAsteroids?.map((asteroid: Asteroid) => (
        <AsteroidsTag
          {...asteroid}
          name={asteroid.name_limited}
          key={asteroid.id}
          description={asteroid?.link?.self}
          favorite
        />
      )),
    [allAsteroids]
  );

  return <S.Container>{renderAsteroidsTags}</S.Container>;
}
