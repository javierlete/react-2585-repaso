import { RouterProvider } from "react-router";
import Formulario from "./componentes/Formulario";
import Listado from "./componentes/Listado";
import { createBrowserRouter } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Listado />),
    },
    {
      path: "formulario",
      element: <Formulario />,
    },
    {
      path: "formulario/:id",
      element: <Formulario />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}
