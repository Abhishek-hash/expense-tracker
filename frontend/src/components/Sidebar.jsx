// src/components/Sidebar.jsx
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="w-64 bg-blue-600 text-white flex flex-col p-4 space-y-4">
    <h2 className="text-2xl font-bold">Menu</h2>
    <nav className="flex flex-col space-y-2">
      <Link to="/" className="hover:bg-blue-700 p-2 rounded">
        Dashboard
      </Link>
      <Link to="/analytics" className="hover:bg-blue-700 p-2 rounded">
        Analytics
      </Link>
    </nav>
  </aside>
);

export default Sidebar;
