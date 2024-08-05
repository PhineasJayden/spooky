import { chapters } from "./chapters.js";

import AudioItem from "./AudioItem.jsx";
import SubHeader from "../../ui/SubHeader.jsx";
import Container from "../../ui/Container.jsx";
import Button from "../../ui/Button.jsx";
import { useState } from "react";
import AudioPlayer from "./AudioPlayer.jsx";

function Audiobook() {
  const [playlist, setShowPlaylist] = useState(false);
  const [curChapter, setcurChapter] = useState(0);

  return (
    <>
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
        />
      )}
    </>
  );
}

export default Audiobook;

//styling the audio element https://blog.shahednasser.com/how-to-style-an-audio-element/
