import { useNavigate } from "react-router-dom";

import Button from "./Button.jsx";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Button onClick={() => navigate("/audiobook")}>Hörbuch</Button>
      <Button onClick={() => navigate("/gallery")}>Illustrationen</Button>
    </div>
  );
}

export default Home;
