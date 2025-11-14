import React from "react";
import { UserCircle } from "lucide-react";

const AdminHeader = ({
  title = "Dashboard Overview",
  username = "Admin User",
}) => {
  return (
    <header className="mb-6">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-bold text-gray-900">{title}</h1>

        <div className="flex items-center gap-4">
          <p className="text-xl text-gray-700">
            Welcome, <span className="font-semibold">{username}</span>
          </p>
          <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-5 py-3 rounded-full font-medium">
            <UserCircle size={20} /> Profile
          </button>
        </div>
      </div>
      <hr className="mt-6 border-gray-300" />
    </header>
  );
};

export default AdminHeader;