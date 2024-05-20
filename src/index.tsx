import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home/Home.tsx";
import { Apropos } from "./Pages/Apropos/Apropos.tsx";
import { Logement } from "./Pages/Logement/Logement.tsx";
import { Erreur } from "./Pages/Erreur/Erreur.tsx";
import { Layout } from './components/Layout/Layout.tsx';
import './index.scss'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement:<Erreur/>,
    children:
   
     [
      {
        path: "/",
        element: <Home />,
       
      },
      {
        path: "/apropos",
        element: <Apropos />,
      },
      {
        path: "/logement/:id",
        element: <Logement />,
      },
      {
        path: "/erreur",
        element: <Erreur />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root")as HTMLCanvasElement);
root.render(
  <RouterProvider router={router} />
);
