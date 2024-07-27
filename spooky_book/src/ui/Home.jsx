import LinkButton from "./LinkButton.jsx";

function Home() {
  return (
    <div>
      <LinkButton to={"/audiobook/1234"}>Go to Audiobook</LinkButton>
    </div>
  );
}

export default Home;
