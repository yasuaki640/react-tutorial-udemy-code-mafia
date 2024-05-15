import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EventListenerState } from "./pages/EventListenerState.tsx";
import { EventListenerState0412 } from "./pages/EventListenerState0412.tsx";
import { EventListenerState0412_2 } from "./pages/EventListenerState0412_2.tsx";
import { EventListenerState0412_exercise } from "./pages/EventListenerState0412_exercise.tsx";
import { EventListenerState0412_exercise_2 } from "./pages/EventListenerState0412_exercise_2.tsx";
import { StateComponent } from "./pages/StateComponent.tsx";
import { ControlSyntax } from "./pages/ControlSyntax/ControlSyntax.tsx";
import { ControlSyntax_2 } from "./pages/ControlSyntax/ControlSyntax_2.tsx";
import { ControlSyntax_3 } from "./pages/ControlSyntax/ControlSyntax_3.tsx";
import { UseReducer } from "./pages/UseReducer.tsx";

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
  {
    path: "/event-listener-state0412_exercise",
    element: <EventListenerState0412_exercise />,
  },
  {
    path: "/event-listener-state0412_exercise_2",
    element: <EventListenerState0412_exercise_2 />,
  },
  {
    path: "/state-component",
    element: <StateComponent />,
  },
  {
    path: "/control-syntax",
    element: <ControlSyntax />,
  },
  {
    path: "/control-syntax_2",
    element: <ControlSyntax_2 />,
  },
  {
    path: "/control-syntax_3",
    element: <ControlSyntax_3 />,
  },
  {
    path: "/use-reducer",
    element: <UseReducer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
