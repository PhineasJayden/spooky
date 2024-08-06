import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #5603ad;
  grid-row: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Copyright by Niko</p>
      <p>Impressum</p>
    </StyledFooter>
  );
}

export default Footer;
