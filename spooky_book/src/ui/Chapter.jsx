import { useParams } from "react-router-dom";
import { chapters } from "../Features/Audiobook/chapters.js";
import { images } from "../Features/Gallery/images.js";

import Image from "../Features/Gallery/Image.jsx";
import AudioItem from "../Features/Audiobook/AudioItem.jsx";

function Chapter() {
  const { chapterId } = useParams();

  const currentChapter = chapters.findIndex(
    (chapter) => chapter.id === chapterId
  );

  const currentImage = images.findIndex((image) => image.id === chapterId);

  console.log(currentImage);

  return (
    <div>
      <Image img={images[currentImage].source} />
      <p>{chapters[currentChapter].title}</p>
      <AudioItem source={chapters[currentChapter].src} />
    </div>
  );
}

export default Chapter;
