import { useContext } from "react";
import { SquareDisplay } from "./components/SquareDisplay";
import { SyncContext } from "./context/sync";
import { HeaderControls } from "./components/HeaderButtons";
import * as S from "./styles";

function App() {
  const { backgroundImage, loading } = useContext(SyncContext);
  const { url, title, date, copyright, service_version, media_type } =
    backgroundImage;

  return (
    <S.Container>
      {backgroundImage && <img src={url} alt={title} />}
      <HeaderControls />
      <SquareDisplay />

      <S.TopSpan>Copywrighted to:{copyright}</S.TopSpan>
      <S.RightSpan>Date: {date}</S.RightSpan>
      <S.BottomSpan>
        Visit tomorrow for another fresh background {media_type}
      </S.BottomSpan>
      <S.LeftSpan>Service version: {service_version}</S.LeftSpan>
    </S.Container>
  );
}

export default App;
