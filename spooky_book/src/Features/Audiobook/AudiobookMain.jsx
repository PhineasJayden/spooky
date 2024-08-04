import { useNavigate, useParams } from "react-router-dom";
import { chapters } from "./chapters.js";
import { createElement, useEffect, useRef, useState } from "react";
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
  const navigate = useNavigate();
  const { chapterId } = useParams();
  const chapterIndex = chapters.findIndex(
    (chapter) => chapter.id === chapterId
  );
  const [curChapter, setcurChapter] = useState(chapters[chapterIndex]);
  const [isReady, setIsReady] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const [curTime, setCurTime] = useState("00:00");

  const [duration, setDuration] = useState(0);

  const [seconds, setSeconds] = useState();

  const { imgPreview, id, src, chapter, title, alt } = curChapter;

  const [audio, setAudio] = useState();

  const audioRef = useRef(null);

  useEffect(() => {
    console.log("effekt");
    const interval = setInterval(() => {
      if (audio) {
        setSeconds(audio.currentTime);
        const newTime = formatTime(audio.currentTime);

        setCurTime(newTime);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [audio]);

  function skipForward() {}

  function handlePause() {
    audio.pause();
    setIsPlaying(false);
  }

  function handlePlay() {
    audio.play();
    setIsPlaying(true);
  }

  function handlePrevious() {
    navigate(`/audiobook/${chapters[`${chapterIndex - 1}`].id}`);
    setcurChapter(chapters[chapterIndex - 1]);
  }

  function handleNext() {
    navigate(`/audiobook/${chapters[`${chapterIndex + 1}`].id}`);
    setcurChapter(chapters[chapterIndex + 1]);
  }

  return (
    <>
      <audio
        autoPlay
        src={src}
        preload="metadata"
        id={id}
        onEnded={handleNext}
        ref={audioRef}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onCanPlay={() => {
          setIsReady(true), setAudio(audioRef.current);
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
          max={duration}
          default="0"
          value={seconds}
          onChange={(e) => {
            audio.currentTime = e.target.value;
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
          <p>{curTime}</p>
          <p>{formatTime(duration)}</p>
        </div>
      </div>
      <Controls>
        {!chapterIndex === 0 ? (
          <GrChapterPrevious />
        ) : (
          <GrChapterPrevious onClick={handlePrevious} />
        )}
        <GrRotateLeft />
        {!isPlaying ? (
          <GrPlay onClick={handlePlay} />
        ) : (
          <GrPlayFill onClick={handlePause} />
        )}
        <GrRotateRight />
        {!chapterIndex !== chapters.length - 1 && (
          <GrChapterNext onClick={handleNext} />
        )}
      </Controls>
    </>
  );
}

export default AudiobookMain;
