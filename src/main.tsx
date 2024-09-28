import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import Hero from "./routes/Hero.tsx";
import Resume from "./routes/Resume.tsx";
import Projects from "./routes/Projects.tsx";
import Contact from "./routes/Contact.tsx";

import AnimatedCursor from "react-animated-cursor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/resume", element: <Resume /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AnimatedCursor
      innerSize={8}
      outerSize={40}
      innerScale={1}
      outerScale={1.7}
      outerAlpha={0}
      // hasBlendMode={true}
      innerStyle={{
        backgroundColor: "#e9967a",
        // backgroundColor: "#cecddb",
      }}
      outerStyle={{
        // border: "2px solid #e9967a",
        border: "1px solid #cecddb",
        mixBlendMode: "exclusion",
        // border: "2px solid #6366F1",
      }}
    />
    <RouterProvider router={router} />
  </React.StrictMode>
);
