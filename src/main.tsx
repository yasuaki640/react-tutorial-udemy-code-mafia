import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EventListenerState } from "./pages/EventListenerState.tsx";
import { EventListenerState0412 } from "./pages/EventListenerState0412.tsx";
import { EventListenerState0412_2 } from "./pages/EventListenerState0412_2.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/event-listener-state",
    element: <EventListenerState />,
  },
  {
    path: "/event-listener-state0412",
    element: <EventListenerState0412 />,
  },
  {
    path: "/event-listener-state0412_2",
    element: <EventListenerState0412_2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
