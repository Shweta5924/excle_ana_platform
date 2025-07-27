import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-white-800 text-white flex gap-4">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/upload">Upload</Link>
      <Link to="/files">Files</Link>
      <Link to="/analysis">Analysis</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

