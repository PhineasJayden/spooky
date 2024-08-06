import { useNavigate } from "react-router-dom";

import Button from "./Button.jsx";
import Container from "./Container.jsx";

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Button onClick={() => navigate("/audiobook")}>Hörbuch</Button>
      <Button onClick={() => navigate("/gallery")}>Illustrationen</Button>
      <div></div>
    </Container>
  );
}

export default Home;
