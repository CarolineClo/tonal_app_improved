import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
