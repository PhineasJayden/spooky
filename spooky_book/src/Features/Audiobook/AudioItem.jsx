import { useEffect } from "react";
import styled from "styled-components";
import { formatTime } from "../../utils/helpers.js";

const AudioContainer = styled.div`
  background-color: #de93e0;
  margin: 5px;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
`;

const AudioInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 20px;
`;

function AudioItem({ title, id, setcurChapter, setShowPlaylist, img }) {
  function handleClick() {
    setcurChapter(id);
    setShowPlaylist(false);
  }

  return (
    <AudioContainer onClick={handleClick}>
      <Img src={img} />
      <AudioInfo>
        <h3>{title}</h3>
        <p>Kapitel {id + 1}</p>
      </AudioInfo>
      <h3>03:34</h3>
    </AudioContainer>
  );
}
export default AudioItem;
