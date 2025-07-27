import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [previewName, setPreviewName] = useState("");

  // Handle file select
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.name.endsWith(".xlsx")) {
      setFile(selectedFile);
      setPreviewName(selectedFile.name);
    } else {
      alert("Please upload a valid .xlsx file");
    }
  };

  // Handle file upload (dummy)
  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      alert("No file selected!");
      return;
    }
    // Here you will integrate backend API for upload
    alert(`File "${file.name}" uploaded successfully!`);
    setFile(null);
    setPreviewName("");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-500 text-white flex flex-col">
        <div className="px-6 py-4 text-2xl font-bold border-b border-blue-500">
          Excel Analytics
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="/dashboard" className="block px-3 py-2 rounded-lg hover:bg-blue-900">
            Dashboard
          </a>
          <a href="/upload" className="block px-3 py-2 rounded-lg bg-blue-900">
            Upload File
          </a>
          <a href="/files" className="block px-3 py-2 rounded-lg hover:bg-blue-900">
            Files
          </a>
          <a href="/analysis" className="block px-3 py-2 rounded-lg hover:bg-blue-900">
            Analysis
          </a>
          <a href="/profile" className="block px-3 py-2 rounded-lg hover:bg-blue-900">
            Profile
          </a>
        </nav>
        <div className="p-4 border-t border-blue-500 text-sm">
          <button className="w-full py-2 bg-red-500 hover:bg-red-900 rounded-lg">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Upload Excel File</h1>

        <form
          onSubmit={handleUpload}
          className="bg-white p-8 rounded-xl shadow-lg max-w-xl mx-auto"
        >
          {/* Drag-and-Drop Style */}
          <label
            htmlFor="fileInput"
            className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5.002 5.002 0 0115.9 6H17a5 5 0 010 10h-1"
              />
            </svg>
            <p className="text-gray-500">Drag & Drop or Click to Select File</p>
            <p className="text-xs text-gray-400 mt-1">Only .xlsx files supported</p>
            <input
              id="fileInput"
              type="file"
              accept=".xlsx"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {/* Preview */}
          {previewName && (
            <div className="mt-4 text-sm text-gray-700">
              <span className="font-medium">Selected File:</span> {previewName}
            </div>
          )}

          {/* Upload Button */}
          <button
            type="submit"
            className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            Upload
          </button>
        </form>
      </main>
    </div>
  );
}
