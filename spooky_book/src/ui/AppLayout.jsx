import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
