import { useContext, useState } from "react";
import * as S from "./styles";
import { SyncContext } from "../../context/sync";

interface AsteroidTag {
  name: string;
  description: string;
  favorite: boolean;
}

export function AsteroidsTag({
  name,
  description,
  favorite,
  ...rest
}: AsteroidTag) {
  console.log("🚀 ~ file: index.tsx:17 ~ rest:", rest);
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <S.Container selected={selected} onClick={() => setSelected(!selected)}>
      <div>
        <S.AsteroidNameTag>{name}</S.AsteroidNameTag>
        {favorite && <S.Star>&#9733;</S.Star>}
        {!favorite && <S.Star>&#9734;</S.Star>}
      </div>

      <S.AsteroidDescription>{description}</S.AsteroidDescription>
    </S.Container>
  );
}
