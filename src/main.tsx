import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import Hero from "./routes/Hero.tsx";
import Projects from "./routes/Projects.tsx";
import Resume from "./routes/Resume.tsx";
import AnimatedCursor from "react-animated-cursor";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from "./routes/Contact.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Hero />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

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
      }}
      outerStyle={{
        border: "2px solid #e9967a",
        mixBlendMode: "exclusion",
        // border: "2px solid #6366F1",
      }}
    />
    <RouterProvider router={router} />
  </React.StrictMode>
);
