import { AsteroidsDisplay } from "../AsteroidsDisplay";
import { UserPreferences } from "../UserPreferences";
import * as S from "./styles";

export function SquareDisplay() {
  return (
    <S.Container>
      <AsteroidsDisplay />
      <UserPreferences />
    </S.Container>
  );
}
