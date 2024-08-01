import styled from "styled-components";

const StyledSubHeader = styled.div`
  background-color: #5603ad;
  color: #e2d3f1;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

function SubHeader({ title }) {
  return <StyledSubHeader>{title}</StyledSubHeader>;
}

export default SubHeader;
