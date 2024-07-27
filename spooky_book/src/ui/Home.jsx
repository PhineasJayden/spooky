import LinkButton from "./LinkButton.jsx";

function Home() {
  return (
    <div>
      <LinkButton to={"/audiobook"}>Go to Audiobook</LinkButton>
      <LinkButton to={"/chapter/spkliao"}>Go to Chapter 1</LinkButton>
    </div>
  );
}

export default Home;
