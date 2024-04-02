import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <div id="particles-js"></div> */}
      <Nav />
      <Outlet />
    </>
  );
};

export default App;
