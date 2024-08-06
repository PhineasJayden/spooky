import { chapters } from "./chapters.js";
import AudioItem from "./AudioItem.jsx";
import Container from "../../ui/Container.jsx";
import { useState } from "react";
import AudioPlayer from "./AudioPlayer.jsx";
import ButtonBack from "../../ui/ButtonBack.jsx";
import { useNavigate } from "react-router-dom";

function Audiobook() {
  const navigate = useNavigate();
  const [playlist, setShowPlaylist] = useState(false);
  const [curChapter, setcurChapter] = useState(0);

  function handleBack() {
    console.log("click");
    if (playlist) {
      setShowPlaylist(false);
    } else {
      navigate("/");
    }
  }

  return (
    <>
      <ButtonBack handleBack={handleBack} />
      {playlist ? (
        <Container>
          {chapters.map((chapter, index) => {
            return (
              <AudioItem
                img={chapter.imgPreview}
                title={chapter.title}
                key={chapter.id}
                id={index}
                setcurChapter={setcurChapter}
                setShowPlaylist={setShowPlaylist}
              />
            );
          })}
        </Container>
      ) : (
        <AudioPlayer
          curChapter={curChapter}
          setcurChapter={setcurChapter}
          setShowPlaylist={setShowPlaylist}
          isSingleChapter={false}
        />
      )}
    </>
  );
}

export default Audiobook;

//styling the audio element https://blog.shahednasser.com/how-to-style-an-audio-element/
