import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from "./pages/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
