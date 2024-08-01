import { useParams } from "react-router-dom";
import { chapters } from "../Features/Audiobook/chapters.js";

import AudioItem from "../Features/Audiobook/AudioItem.jsx";
import GalleryItem from "../Features/Gallery/GalleryItem.jsx";
import SubHeader from "./SubHeader.jsx";

function Chapter() {
  const { chapterId } = useParams();

  const currentChapter = chapters.findIndex(
    (chapter) => chapter.id === chapterId
  );

  const { title, img, id, alt, src, chapter } = chapters[currentChapter];

  return (
    <>
      <GalleryItem img={img} title={title} id={id} alt={alt} />
      <AudioItem source={src} id={chapter} title={title} />
    </>
  );
}

export default Chapter;
