import { useState } from "react";
import { Link } from "react-router-dom";

export default function FileList() {
  // Dummy file data
  const [files, setFiles] = useState([
    { id: 1, name: "Sales_Q1.xlsx", uploadedBy: "Alice", date: "2025-07-20" },
    { id: 2, name: "Inventory_Report.xlsx", uploadedBy: "Bob", date: "2025-07-18" },
    { id: 3, name: "Budget_2025.xlsx", uploadedBy: "Charlie", date: "2025-07-15" },
  ]);

  // Handle delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this file?")) {
      setFiles(files.filter((file) => file.id !== id));
    }
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
          <Link to="/files" className="block px-3 py-2 rounded-lg bg-blue-600">
            Files
          </Link>
          <Link to="/analysis" className="block px-3 py-2 rounded-lg hover:bg-blue-600">
            Analysis
          </Link>
          <Link to="/profile" className="block px-3 py-2 rounded-lg hover:bg-blue-600">
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
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Uploaded Files</h1>

        {/* Table */}
        <div className="bg-white shadow rounded-xl overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600">
                <th className="p-3">File Name</th>
                <th className="p-3">Uploaded By</th>
                <th className="p-3">Upload Date</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.length > 0 ? (
                files.map((file) => (
                  <tr key={file.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{file.name}</td>
                    <td className="p-3">{file.uploadedBy}</td>
                    <td className="p-3">{file.date}</td>
                    <td className="p-3 text-center space-x-3">
                      {/* View File */}
                      <Link
                        to={`/analysis?id=${file.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        View
                      </Link>

                      {/* Analyze File */}
                      <Link
                        to={`/analysis?id=${file.id}`}
                        className="text-green-600 hover:underline"
                      >
                        Analyze
                      </Link>

                      {/* Delete File */}
                      <button
                        onClick={() => handleDelete(file.id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-500">
                    No files uploaded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
