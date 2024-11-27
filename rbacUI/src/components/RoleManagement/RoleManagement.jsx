import { useState } from "react";

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", description: "Full access to all features" },
    { id: 2, name: "Editor", description: "Can edit content" },
    { id: 3, name: "Viewer", description: "Can view content only" },
  ]);

  const [form, setForm] = useState({ id: null, name: "", description: "" });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = () => {
    if (form.id) {
      setRoles(roles.map((role) => (role.id === form.id ? form : role)));
    } else {
      setRoles([...roles, { ...form, id: roles.length + 1 }]);
    }
    setForm({ id: null, name: "", description: "" });
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const handleEdit = (role) => {
    setForm(role);
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Role Management</h2>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Role
      </button>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Role Name</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{role.name}</td>
              <td className="border border-gray-300 px-4 py-2">{role.description}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleEdit(role)}
                  className="mr-2 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(role.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h3 className="text-xl font-bold mb-4">{form.id ? "Edit Role" : "Add Role"}</h3>

            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Role Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                ></textarea>
              </div>
            </form>

            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleManagement;
