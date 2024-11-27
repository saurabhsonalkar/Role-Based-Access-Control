import { useState } from "react";

const PermissionsManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: { read: true, write: true, delete: true } },
    { id: 2, name: "Editor", permissions: { read: true, write: true, delete: false } },
    { id: 3, name: "Viewer", permissions: { read: true, write: false, delete: false } },
  ]);

  const [permissions] = useState(["read", "write", "delete"]); 

  const togglePermission = (roleId, permission) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === roleId
          ? {
              ...role,
              permissions: {
                ...role.permissions,
                [permission]: !role.permissions[permission],
              },
            }
          : role
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Permissions Management</h2>

      
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            {permissions.map((perm) => (
              <th key={perm} className="border border-gray-300 px-4 py-2 capitalize">
                {perm}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{role.name}</td>
              {permissions.map((perm) => (
                <td key={perm} className="border border-gray-300 px-4 py-2">
                  <input
                    type="checkbox"
                    checked={role.permissions[perm]}
                    onChange={() => togglePermission(role.id, perm)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionsManagement;
