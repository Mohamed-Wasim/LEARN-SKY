import "./App.scss";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError
} from "react-router-dom";
import React, { Suspense } from "react";
import AuthRoutes from "../src/routes/AuthRoutes";
import StudentRoutes from "../src/routes/StudentRoutes";
import AdminRoutes from "../src/routes/AdminRoutes";
import "@material-symbols/font-400";
import StudentHome from "./pages/Student/StudentHome/StudentHome";
import AdminHome from "./pages/Admin/AdminHome/AdminHome";
import { Container } from "react-bootstrap";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <AuthRoutes />
      </Suspense>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "login",
        errorElement: <ErrorBoundary />
      },
      {
        path: "register",
        errorElement: <ErrorBoundary />
      }
    ]
  },
  {
    path: "/student",
    element: <StudentHome />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "*",
        element: (
          <Suspense>
            <StudentRoutes />
          </Suspense>
        ),
        errorElement: <ErrorBoundary />
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminHome />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "*",
        element: (
          <Suspense>
            <AdminRoutes />
          </Suspense>
        ),
        errorElement: <ErrorBoundary />
      }
    ]
  }
]);

function App() {
  return (
    // <Container style={{ backgroundColor: "white" }}>
    <RouterProvider router={router} />
    // </Container>
  );
}

function ErrorBoundary() {
  const error = useRouteError();
  if (error) {
    return <div>Error in page </div>;
  }
}

export default App;
