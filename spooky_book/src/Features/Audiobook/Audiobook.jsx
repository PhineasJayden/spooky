import { useParams } from "react-router-dom";
import { chapters } from "./chapters.js";
import { images } from "../Gallery/images.js";

import Image from "../Gallery/Image.jsx";

function Audiobook() {
  const { audioId } = useParams();

  const currentChapter = chapters.findIndex(
    (chapter) => chapter.id === audioId
  );

  const currentImage = images.findIndex((image) => image.id === audioId);

  return (
    <div>
      <Image img={images[currentImage].source} />
      <p>{chapters[currentChapter].title}</p>
      <audio src={chapters[currentChapter].src} controls />
    </div>
  );
}

export default Audiobook;

//styling the audio element https://blog.shahednasser.com/how-to-style-an-audio-element/
