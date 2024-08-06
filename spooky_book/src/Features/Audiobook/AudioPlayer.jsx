import { chapters } from "./chapters.js";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import {
  TbPlayerSkipForwardFilled,
  TbPlayerSkipBackFilled,
  TbPlayerSkipBack,
  TbPlayerPlayFilled,
  TbPlayerSkipForward,
  TbPlayerPauseFilled,
  TbPlus,
  TbPlaylist,
  TbRewindBackward10,
  TbRewindForward10,
} from "react-icons/tb";
import { GrUnorderedList } from "react-icons/gr";

import { formatTime } from "../../utils/helpers.js";
import { IconContext } from "react-icons/lib";
import { Popover } from "react-tiny-popover";
import VolumeInput from "../../ui/VolumeInput.jsx";
import Loader from "../../ui/Loader.jsx";

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

function AudioPlayer({
  curChapter,
  setcurChapter,
  setShowPlaylist,
  isSingleChapter,
}) {
  const [isReady, setIsReady] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const [curTime, setCurTime] = useState("00:00");

  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);

  const [seconds, setSeconds] = useState();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { imgPreview, id, src, chapter, title, alt } =
    chapters[Number(curChapter)];

  const [audio, setAudio] = useState();

  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audio) {
        setSeconds(audio.currentTime);
        const newTime = formatTime(audio.currentTime);

        setCurTime(newTime);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [audio]);

  useEffect(() => {
    if (isSingleChapter) return;
    audioRef.current?.pause();

    const timeout = setTimeout(() => {
      audioRef.current?.play();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [curChapter, isSingleChapter]);

  function skipForward() {
    audio.currentTime = audio.currentTime + 10;
  }
  function skipBack() {
    audio.currentTime = audio.currentTime - 10;
  }

  function togglePopover() {
    if (!isPopoverOpen) {
      setIsPopoverOpen(true);
    } else {
      setIsPopoverOpen(false);
    }
  }

  function handlePause() {
    audio.pause();
    setIsPlaying(false);
  }

  function handlePlay() {
    audio.play();
    setIsPlaying(true);
  }

  function handlePrevious() {
    const newChapter = curChapter - 1;
    setcurChapter(newChapter);
  }

  function handleNext() {
    if (curChapter === chapters.length - 1) return;
    const newChapter = curChapter + 1;
    setcurChapter(newChapter);
  }

  function handleVolumeChange(vol) {
    if (!audioRef.current) return;
    audioRef.current.volume = vol;
    setVolume(vol);
  }

  return (
    <>
      <IconContext.Provider value={{ style: { color: "white" } }}>
        <audio
          src={src}
          preload="metadata"
          id={id}
          onEnded={handleNext}
          ref={audioRef}
          onDurationChange={(e) => setDuration(e.currentTarget.duration)}
          onCanPlay={() => {
            setIsReady(true), setAudio(audioRef.current);
          }}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        <Img src={imgPreview} alt={alt} />
        <div style={{ marginBottom: "20px" }}>
          <AudioInfo>
            <h4>{title}</h4>
            <Popover
              isOpen={isPopoverOpen}
              positions={["right"]}
              content={
                <VolumeInput
                  volume={volume}
                  handleVolumeChange={handleVolumeChange}
                />
              }
              onClickOutside={() => setIsPopoverOpen(false)}
            >
              <div onClick={togglePopover}>
                {volume === 0 ? <HiVolumeOff /> : <HiVolumeUp />}
              </div>
            </Popover>
          </AudioInfo>
          <AudioInfo style={{ justifyContent: "flex-start" }}>
            {!isSingleChapter && (
              <GrUnorderedList onClick={() => setShowPlaylist(true)} />
            )}
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
            id="range"
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
          {curChapter === 0 || isSingleChapter ? (
            <TbPlayerSkipBack aria-label="go to previous" disabled={true} />
          ) : (
            <TbPlayerSkipBackFilled
              onClick={handlePrevious}
              aria-label="go to previous"
            />
          )}
          <TbRewindBackward10
            onClick={skipBack}
            aria-label="rewind 10 seconds"
          />
          {!isReady && <Loader />}
          {!isPlaying ? (
            <TbPlayerPlayFilled
              onClick={handlePlay}
              disabled={!isReady}
              aria-label="play"
            />
          ) : (
            <TbPlayerPauseFilled onClick={handlePause} aria-label="pause" />
          )}
          <TbRewindForward10
            onClick={skipForward}
            aria-label="skip forward 10 seconds"
          />
          {!isSingleChapter && curChapter !== chapters.length - 1 ? (
            <TbPlayerSkipForwardFilled
              onClick={handleNext}
              aria-label="go to next"
            />
          ) : (
            <TbPlayerSkipForward aria-label="go to next" disabled={true} />
          )}
        </Controls>
      </IconContext.Provider>
    </>
  );
}

export default AudioPlayer;
