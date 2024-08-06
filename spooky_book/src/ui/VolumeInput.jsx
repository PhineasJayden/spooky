import styled from "styled-components";

const VolumeSlider = styled.input`
  writing-mode: vertical-lr;
  direction: rtl;
  width: 16px;
  vertical-align: bottom;
  z-index: 5;
`;

function VolumeInput({ volume, handleVolumeChange }) {
  return (
    <VolumeSlider
      type="range"
      aria-label="volume"
      name="volume"
      min={0}
      step={0.05}
      max={1}
      value={volume}
      onChange={(e) => handleVolumeChange(e.currentTarget.valueAsNumber)}
    />
  );
}

export default VolumeInput;
