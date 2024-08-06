import styled from "styled-components";

const AudioContainer = styled.div`
  background-color: #de93e0;
  align-self: stretch;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
  height: 20vh;
`;

const Img = styled.img`
  flex: 1;
  height: 80%;
  width: auto;
  object-fit: cover;
  margin-right: 10px;
`;

const AudioInfo = styled.div`
  flex: 2;
  display: flex;
  justify-self: right;
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
