import { useContext, useMemo } from "react";
import { AsteroidsTag } from "../AsteroidTag";
import * as S from "./styles";
import { SyncContext } from "../../context/sync";
import { Asteroid } from "../../context/contextInterfaces";

export function AsteroidsDisplay() {
  const { allAsteroids } = useContext(SyncContext);

  const renderAsteroidsTags = useMemo(() => {
    allAsteroids?.map((asteroid: Asteroid) => (
      <AsteroidsTag {...asteroid} name={} key={} favorite description="" />
    ));
  }, []);

  return <S.Container>{renderAsteroidsTags}</S.Container>;
}
