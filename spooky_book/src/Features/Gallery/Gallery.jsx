import styled from "styled-components";
import SubHeader from "../../ui/SubHeader.jsx";
import furcht from "../../assets/images/furcht_sketch.jpg";
import GalleryItem from "./GalleryItem.jsx";
import { chapters } from "../Audiobook/chapters.js";
import ButtonBack from "../../ui/ButtonBack.jsx";
import { useNavigate } from "react-router-dom";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
          img={chapter.img}
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
