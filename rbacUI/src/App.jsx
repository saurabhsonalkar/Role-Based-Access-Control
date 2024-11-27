import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserManagement from "./components/UserManagement/UserManagement";
import RoleManagement from "./components/RoleManagement/RoleManagement";
import PermissionsManagement from "./components/PermissionsManagement/PermissionsManagement";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <aside className="w-1/4 bg-gray-800 text-white p-4">
          <h1 className="text-xl font-bold mb-4">RBAC Dashboard</h1>
          <nav className="flex flex-col gap-2">
            <Link to="/users" className="hover:text-gray-300">
              User Management
            </Link>
            <Link to="/roles" className="hover:text-gray-300">
              Role Management
            </Link>
            <Link to="/permissions" className="hover:text-gray-300">
              Permissions
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/users" element={<UserManagement />} />
            <Route path="/roles" element={<RoleManagement />} />
            <Route path="/permissions" element={<PermissionsManagement />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
