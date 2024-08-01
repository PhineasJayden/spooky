import { useEffect } from "react";
import styled from "styled-components";

const AudioContainer = styled.div`
  background-color: #de93e0;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
`;

const Audio = styled.audio`
  margin: 5px;
`;

function AudioItem({ source, title, id, setCurId, curId, autoPlay }) {
  function playNext(e) {
    e.preventDefault();

    if (!autoPlay) return;

    document.getElementById(id + 1).play();
  }

  function playOne(e) {
    e.preventDefault();
    if (curId === id) return;
    !curId ? setCurId(id) : document.getElementById(curId).pause();
    setCurId(id);
  }

  function pause(e) {
    e.preventDefault();
  }

  return (
    <AudioContainer>
      <p>
        Kapitel {id} - {title}
      </p>
      <Audio
        src={source}
        controls
        controlsList="nodownload noplaybackrate"
        id={id}
        tagname="audio"
        onEnded={(e) => playNext(e)}
        onPlay={(e) => playOne(e)}
        onPause={(e) => pause(e)}
      />
    </AudioContainer>
  );
}
export default AudioItem;
