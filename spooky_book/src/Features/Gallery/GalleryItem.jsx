import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledGalleryItem = styled.img`
  width: 80%;
  height: 80%;
  margin: 10px;
  object-fit: cover;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 1fr;
  height: 1fr;
  background-color: #624362;
  text-align: center;
`;

const P = styled.p`
  font-size: 2rem;
`;

function GalleryItem({ img, title, id }) {
  const navigate = useNavigate();

  function openImg() {
    navigate(`/gallery/${id}`);
  }
  return (
    <ImgContainer>
      <StyledGalleryItem src={img} onClick={openImg} />
      <P>{title}</P>
    </ImgContainer>
  );
}

export default GalleryItem;
