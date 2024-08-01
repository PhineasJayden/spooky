import { chapters } from "./chapters.js";

import AudioItem from "./AudioItem.jsx";
import SubHeader from "../../ui/SubHeader.jsx";
import Container from "../../ui/Container.jsx";
import Button from "../../ui/Button.jsx";
import { useState } from "react";

function Audiobook() {
  const [curId, setCurId] = useState();
  const [volume, setVolume] = useState(1);
  const [autoPlay, setAutoPlay] = useState(false);

  function setGlobalVolume(e) {
    setVolume(e.target.value);
    const audioFiles = document.getElementsByTagName("audio");
    for (let i = 0; i < audioFiles.length; i++) {
      audioFiles[i].volume = e.target.value;
    }
  }

  return (
    <>
      <Button onClick={() => setAutoPlay(!autoPlay)}>
        {!autoPlay ? "AutoPlay aktivieren" : "AutoPlay deaktivieren"}
      </Button>
      <input
        type="range"
        id="volume"
        name="global-volume"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => setGlobalVolume(e)}
      />
      <p>Lautstärke: {volume * 100}%</p>
      <Container>
        {chapters.map((chapter) => {
          return (
            <AudioItem
              source={chapter.src}
              title={chapter.title}
              key={chapter.id}
              id={chapter.chapter}
              setCurId={setCurId}
              curId={curId}
              autoPlay={autoPlay}
            />
          );
        })}
      </Container>
    </>
  );
}

export default Audiobook;

//styling the audio element https://blog.shahednasser.com/how-to-style-an-audio-element/
