import styled from "styled-components";
import SubHeader from "../../ui/SubHeader.jsx";
import furcht from "../../assets/images/furcht_sketch.jpg";
import GalleryItem from "./GalleryItem.jsx";
import { chapters } from "../Audiobook/chapters.js";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 10px;
`;

function Gallery() {
  return (
    <GalleryContainer>
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
