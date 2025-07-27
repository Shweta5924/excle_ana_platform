import { useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Data Analyst",
    joined: "2025-01-15",
  });

  const [editMode, setEditMode] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle save
  const handleSave = () => {
    setEditMode(false);
    alert("Profile updated successfully!");
    // Later: send update to backend
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col">
        <div className="px-6 py-4 text-2xl font-bold border-b border-blue-500">
          Excel Analytics
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/dashboard" className="block px-3 py-2 rounded-lg hover:bg-blue-600">
            Dashboard
          </Link>
          <Link to="/upload" className="block px-3 py-2 rounded-lg hover:bg-blue-600">
            Upload File
          </Link>
          <Link to="/files" className="block px-3 py-2 rounded-lg hover:bg-blue-600">
            Files
          </Link>
          <Link to="/analysis" className="block px-3 py-2 rounded-lg hover:bg-blue-600">
            Analysis
          </Link>
          <Link to="/profile" className="block px-3 py-2 rounded-lg bg-blue-600">
            Profile
          </Link>
        </nav>
        <div className="p-4 border-t border-blue-500 text-sm">
          <button className="w-full py-2 bg-red-500 hover:bg-red-600 rounded-lg">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h1>

        <div className="bg-white p-6 rounded-xl shadow max-w-2xl">
          {/* Avatar */}
          <div className="flex items-center mb-6">
            <img
              src={`https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff&size=100`}
              alt="avatar"
              className="w-20 h-20 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.role}</p>
              <p className="text-gray-400 text-sm">Joined: {user.joined}</p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm mb-1">Full Name</label>
              <input
                name="name"
                value={user.name}
                onChange={handleChange}
                disabled={!editMode}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  !editMode ? "bg-gray-100" : ""
                }`}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">Email</label>
              <input
                name="email"
                value={user.email}
                onChange={handleChange}
                disabled={!editMode}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  !editMode ? "bg-gray-100" : ""
                }`}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">Role</label>
              <input
                name="role"
                value={user.role}
                onChange={handleChange}
                disabled={!editMode}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  !editMode ? "bg-gray-100" : ""
                }`}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end space-x-3">
            {editMode ? (
              <>
                <button
                  onClick={() => setEditMode(false)}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Save
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Password Section */}
        <div className="bg-white p-6 rounded-xl shadow max-w-2xl mt-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Change Password</h2>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
            Update Password
          </button>
        </div>
      </main>
    </div>
  );
}
