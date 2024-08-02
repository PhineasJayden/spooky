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
import { formatTime } from "../../utils/helpers.js";

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
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [curTime, setCurTime] = useState({
    min: "",
    sec: "",
  });
  const [seconds, setSeconds] = useState();

  const { imgPreview, id, src, chapter, title, alt } = curChapter;
  const curAudio = curChapter.src;

  const audio = document.querySelector("audio");

  const [play, { duration, sound }] = useSound(curAudio);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        console.log("interval started");
        setSeconds(audio.currentTime); // setting the seconds state with the current state
        const min = Math.floor(audio.currentTime / 60);
        const sec = Math.floor(audio.currentTime % 60);
        setCurTime({
          min,
          sec,
        });
        if (!isPlaying) {
          clearInterval(interval);
        }
      }, 500);
    } else return;
  }, [isPlaying, audio]);

  function skipForward() {
    sound.currentTime;
  }

  function handlePlay() {
    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }

  function handleInputChange(e) {
    audio.currentTime = e.target.value;
  }

  function handleNext() {
    console.log("ended");
    clearInterval();
  }

  return (
    <>
      <audio
        src={curAudio}
        preload="metadata"
        onEnded={handleNext}
        onCanPlay={(e) => {
          setIsReady(true);
        }}
      />
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
            handleInputChange([e.target.value]);
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
            {curTime.min < 10 ? 0 : null}
            {curTime.min}:{curTime.sec < 10 ? 0 : null}
            {curTime.sec}
          </p>
          <p>{formatTime(duration)}</p>
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
