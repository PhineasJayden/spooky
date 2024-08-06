import styled from "styled-components";

import GalleryItem from "./GalleryItem.jsx";
import { chapters } from "../Audiobook/chapters.js";
import ButtonBack from "../../ui/ButtonBack.jsx";
import { useNavigate } from "react-router-dom";

const GalleryContainer = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  margin: 10px;
`;

function Gallery() {
  const navigate = useNavigate();
  return (
    <GalleryContainer>
      <ButtonBack handleBack={() => navigate("/")} />
      {chapters.map((chapter) => (
        <GalleryItem
          img={chapter.imgPreview}
          title={chapter.title}
          key={chapter.id}
          alt={chapter.alt}
          id={chapter.id}
        />
      ))}
    </GalleryContainer>
  );
}

export default Gallery;
