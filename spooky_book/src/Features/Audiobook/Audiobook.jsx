import { chapters } from "./chapters.js";

import AudioItem from "./AudioItem.jsx";

function Audiobook() {
  return (
    <div>
      <p>full audiobook</p>
      {chapters.map((chapter) => {
        return (
          <AudioItem
            source={chapter.src}
            title={chapter.title}
            key={chapter.id}
          />
        );
      })}
    </div>
  );
}

export default Audiobook;

//styling the audio element https://blog.shahednasser.com/how-to-style-an-audio-element/
