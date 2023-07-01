import { useContext, useState } from "react";
import * as S from "./styles";
import { SyncContext } from "../../context/sync";

interface AsteroidTag {
  name: string;
  description: string;
  favorite: boolean;
}

export function AsteroidsTag(props: any) {
  const { handlePickOneAsteroid } = useContext(SyncContext);
  const favorite = true;
  const [selected, setSelected] = useState<boolean>(false);

  const { name, description, id } = props;
  return (
    <S.Container
      selected={selected}
      onClick={() => [setSelected(!selected), handlePickOneAsteroid(id)]}
    >
      <div>
        <S.AsteroidNameTag>{name}</S.AsteroidNameTag>
        {favorite && <S.Star>&#9733;</S.Star>}
        {!favorite && <S.Star>&#9734;</S.Star>}
      </div>

      <S.AsteroidDescription>{description}</S.AsteroidDescription>
    </S.Container>
  );
}
