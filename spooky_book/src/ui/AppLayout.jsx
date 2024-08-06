import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import Loader from "./Loader.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  overflow: hidden;
`;

const Main = styled.main`
  background-color: #362645;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 10px;
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
