function AudioItem({ source, title }) {
  return (
    <div>
      <p>{title}</p>
      <audio src={source} controls />
    </div>
  );
}
export default AudioItem;
