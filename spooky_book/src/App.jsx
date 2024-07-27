import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Error from "./ui/Error.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Audiobook from "./Features/Audiobook/Audiobook.jsx";
import Gallery from "./Features/Gallery/Gallery.jsx";
import Chapter from "./ui/Chapter.jsx";
import Scene from "./Features/3D/Scene.jsx";

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
        path: "/gallery/:imgId",
        element: <Gallery />,
        errorElement: <Error />,
      },
      {
        path: "/audiobook",
        element: <Audiobook />,
        errorElement: <Error />,
      },
      { path: "/3dView", element: <Scene />, errorElement: <Error /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
