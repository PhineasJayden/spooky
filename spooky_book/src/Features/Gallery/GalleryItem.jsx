import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledGalleryItem = styled.img`
  width: 150px;
  height: 150px;
  margin: 10px;
  object-fit: cover;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 190px;
  height: 200px;
  background-color: #f9f9f9;
  text-align: center;
`;

const P = styled.p`
  font-size: 16px;
  color: #171717;
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
