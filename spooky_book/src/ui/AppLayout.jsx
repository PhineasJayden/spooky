import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import Loader from "./Loader.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  overflow: hidden;
`;

const Main = styled.main`
  background-color: #362645;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  align-items: center;
  text-align: center;
`;

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <StyledAppLayout>
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
