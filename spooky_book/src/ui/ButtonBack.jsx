import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

const BackButton = styled.button`
  position: absolute;
  top: 30px;
  left: 10px;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  font-size: 50px;
`;

function ButtonBack({ handleBack }) {
  return (
    <IconContext.Provider value={{ style: { color: "white" } }}>
      <BackButton onClick={handleBack}>
        <IoChevronBack />
      </BackButton>
    </IconContext.Provider>
  );
}

export default ButtonBack;
