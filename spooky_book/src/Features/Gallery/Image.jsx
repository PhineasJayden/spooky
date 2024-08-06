import React from "react";
import { chapters } from "../Audiobook/chapters.js";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ButtonBack from "../../ui/ButtonBack.jsx";

const StyledImage = styled.img``;

function Image() {
  const { imgId } = useParams();
  const navigate = useNavigate();

  const currentChapter = chapters.findIndex((chapter) => chapter.id === imgId);

  return (
    <>
      <ButtonBack handleBack={() => navigate(-1)} />
      <StyledImage
        src={chapters[currentChapter].img}
        onContextMenu={(e) => e.preventDefault()}
      />
    </>
  );
}

export default Image;
