import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #8367c7;
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Spooky</h1>
      {location.pathname === "/" && <h2>Willkommen</h2>}
      {location.pathname === "/audiobook" && <h2>Hörbuch</h2>}
      {location.pathname === "/gallery" && <h2>Illustrationen</h2>}
    </StyledHeader>
  );
}

export default Header;
