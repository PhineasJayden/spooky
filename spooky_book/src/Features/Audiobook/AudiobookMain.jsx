import { useParams } from "react-router-dom";
import { chapters } from "./chapters.js";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  GrVolume,
  GrChapterNext,
  GrChapterPrevious,
  GrMenu,
  GrPlay,
  GrPlayFill,
  GrRotateRight,
  GrRotateLeft,
  GrUnorderedList,
  GrVolumeMute,
} from "react-icons/gr";
import useSound from "use-sound";

const Img = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin-top: 20px;
`;
const AudioInfo = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  justify-content: space-between;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  margin: 20px;
`;

function AudiobookMain() {
  const { chapterId } = useParams();
  const chapterIndex = chapters.findIndex(
    (chapter) => chapter.id === chapterId
  );

  const [curChapter, setcurChapter] = useState(chapters[chapterIndex]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });
  const [seconds, setSeconds] = useState();

  const { imgPreview, id, src, chapter, title, alt } = curChapter;
  const curAudio = curChapter.src;

  const [play, { pause, duration, sound }] = useSound(curAudio);

  const sec = duration / 1000;
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  const time = {
    min: min,
    sec: secRemain,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  function skipForward() {
    sound.currentTime;
  }

  function handlePlay() {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  }

  return (
    <>
      <Img src={imgPreview} alt={alt} />
      <div style={{ marginBottom: "20px" }}>
        <AudioInfo>
          <h4>{title}</h4>
          <GrVolume />
        </AudioInfo>
        <AudioInfo style={{ justifyContent: "flex-start" }}>
          <GrUnorderedList />
          <p style={{ marginLeft: `10px`, fontSize: "16px" }}>
            Kapitel {chapter}
          </p>
        </AudioInfo>
      </div>
      <div>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
          style={{ width: "300px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p>
            {currTime.min < 10 ? 0 : null}
            {currTime.min}:{currTime.sec < 10 ? 0 : null}
            {currTime.sec}
          </p>
          <p>
            {time.min < 10 ? 0 : null}
            {time.min}:{time.sec < 10 ? 0 : null}
            {time.sec}
          </p>
        </div>
      </div>
      <Controls>
        <GrChapterPrevious />
        <GrRotateLeft />
        <GrPlay onClick={handlePlay} />
        <GrRotateRight />
        <GrChapterNext />
      </Controls>
    </>
  );
}

export default AudiobookMain;
