import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Error from "./ui/Error.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Audiobook from "./Features/Audiobook/Audiobook.jsx";
import Gallery from "./Features/Gallery/Gallery.jsx";
import Chapter from "./ui/Chapter.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import Image from "./Features/Gallery/Image.jsx";
import Footer from "./ui/Footer.jsx";
import Header from "./ui/Header.jsx";
import AudiobookMain from "./Features/Audiobook/AudiobookMain.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/chapter/:chapterId",
        element: <Chapter />,
        errorElement: <Error />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
        errorElement: <Error />,
      },
      {
        path: "/gallery/:imgId",
        element: <Image />,
        errorElement: <Error />,
      },
      {
        path: "/audiobook",
        element: <Audiobook />,
        errorElement: <Error />,
      },
      {
        path: "/audiobook/:chapterId",
        element: <AudiobookMain />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />

      <RouterProvider router={router} />
    </>
  );
}

export default App;
