import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Root from "./pages/Root";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route index element={<Home />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
export default App;
