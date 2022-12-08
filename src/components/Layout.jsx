import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Outlet />
      <nav>
        <ul>
          <li>
            <Link to="/acts">Acts</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Layout;
