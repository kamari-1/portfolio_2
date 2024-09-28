import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="relative" id="app">
        <Nav />
        <Outlet />
      </div>
    </>
  );
};

export default App;
