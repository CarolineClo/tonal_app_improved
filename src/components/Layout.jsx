import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Layout;
