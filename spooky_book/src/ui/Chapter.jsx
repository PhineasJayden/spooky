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
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {showAudio && <ButtonBack handleBack={() => setShowAudio(false)} />}
      {!showAudio ? (
        <>
          <Button onClick={() => setShowAudio(true)}>Audio</Button>
          <Button onClick={() => navigate(`/gallery/${chapterId}`)}>
            Illustration
          </Button>
        </>
      ) : (
        <AudioPlayer curChapter={currentChapter} isSingleChapter={true} />
      )}
    </div>
  );
}

export default Chapter;
