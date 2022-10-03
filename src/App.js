import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import First from "./pages/First"
import Layout from "./pages/"
import Second from "./pages/Second"
import Third from "./pages/Third"
import ErrorPage from "./pages/Error"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <First />,
      },
      {
        path: "/first",
        element: <First />,
      },
      {
        path: "/second",
        element: <Second />,
      },
      {
        path: "/third/:num",
        element: <Third />,
      },
    ]
  },

]);


//       <RouterProvider router={router} />
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<First />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third/:number" element={<Third />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
