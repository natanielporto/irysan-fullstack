import { useContext, useRef } from "react";
import * as S from "./styles";
import { SyncContext } from "../../context/sync";

export function HeaderControls() {
  const {
    handleShowAllAsteroids,
    handleShowOneAsteroid,
    handleShowAsteroidsByDate,
  } = useContext(SyncContext);

  const startDateRef = useRef<HTMLInputElement | null>(null);
  const endDateRef = useRef<HTMLInputElement | null>(null);
  const favoriteRef = useRef<HTMLInputElement | null>(null);

  return (
    <S.Container>
      <S.Button onClick={() => handleShowAllAsteroids()}>
        Show all asteroids
      </S.Button>
      <S.Button onClick={() => handleClick("myFavorites")}>
        List your favorites
      </S.Button>
      <div>
        <S.InputButton
          onClick={() => {
            if (startDateRef.current && endDateRef.current) {
              const startDate = startDateRef.current.value;
              const endDate = endDateRef.current.value;
              handleShowAsteroidsByDate({ startDate, endDate });
            }
          }}
        >
          Search by range:
        </S.InputButton>
        <S.InputLeft placeholder="Start date" ref={startDateRef} />
        <S.InputRight placeholder="End date" ref={endDateRef} />
      </div>
      <div>
        <S.InputButton
          onClick={() => {
            if (favoriteRef.current) {
              const favorite = favoriteRef.current.value;
              handleShowOneAsteroid(favorite);
            }
          }}
        >
          Search by favorite:
        </S.InputButton>
        <S.Input placeholder="Name yours here" ref={favoriteRef} />
      </div>
    </S.Container>
  );
}
