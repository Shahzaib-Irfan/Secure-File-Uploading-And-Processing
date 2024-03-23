import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Home from "pages/HomePage";
import HomeListView from "pages/files2";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "files",
      element: <Home />,
    },
    {
      path: "filesTwo",
      element: <HomeListView />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
