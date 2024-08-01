import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import Loader from "./Loader.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import styled from "styled-components";
import Button from "./Button.jsx";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  overflow: hidden;
`;

const Main = styled.main`
  background-color: #c2f8cb;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  align-items: center;
  text-align: center;
`;

const BackButton = styled.button`
  position: absolute;
  margin: 20px;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  font-size: 30px;
`;

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const navigate = useNavigate();

  return (
    <StyledAppLayout>
      <BackButton onClick={() => navigate(-1)}>{`<`}</BackButton>
      <Header />
      {isLoading && <Loader />}
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
