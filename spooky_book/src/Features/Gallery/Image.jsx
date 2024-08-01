import React from "react";
import { chapters } from "../Audiobook/chapters.js";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledImage = styled.img``;

function Image() {
  const { imgId } = useParams();

  const currentChapter = chapters.findIndex((chapter) => chapter.id === imgId);

  return (
    <StyledImage
      src={chapters[currentChapter].img}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
}

export default Image;
