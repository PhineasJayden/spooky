import { useNavigate, useParams } from "react-router-dom";
import { chapters } from "../Features/Audiobook/chapters.js";

import Container from "./Container.jsx";
import Button from "./Button.jsx";
import { useState } from "react";
import ButtonBack from "./ButtonBack.jsx";
import AudioPlayer from "../Features/Audiobook/AudioPlayer.jsx";

function Chapter() {
  const { chapterId } = useParams();
  const navigate = useNavigate();

  const currentChapter = chapters.findIndex(
    (chapter) => chapter.id === chapterId
  );

  const [showAudio, setShowAudio] = useState(false);

  return (
    <>
      {showAudio && <ButtonBack handleBack={() => setShowAudio(false)} />}
      {!showAudio ? (
        <Container>
          <Button onClick={() => setShowAudio(true)}>Audio</Button>
          <Button onClick={() => navigate(`/gallery/${chapterId}`)}>
            Illustration
          </Button>
          <div></div>
        </Container>
      ) : (
        <AudioPlayer curChapter={currentChapter} isSingleChapter={true} />
      )}
    </>
  );
}

export default Chapter;
