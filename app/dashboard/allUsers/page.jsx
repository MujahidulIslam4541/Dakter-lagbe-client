import React from "react";

const AllUsers = () => {
  // sample data
  const users = [
    { id: 1, name: "Cy Ganderton", email: "cy@example.com" },
    { id: 2, name: "Hart Hagerty", email: "hart@example.com" },
    { id: 3, name: "Brice Swyre", email: "brice@example.com" },
  ];

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">All Users: {users.length}</h2>

      <div className="overflow-x-auto rounded-lg border border-base-content/10 bg-white shadow-sm">
        <table className="table table-zebra w-full">
          <thead className="bg-[#18645e] text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <th>{user.id}</th>
                <td className="font-medium text-gray-700">{user.name}</td>
                <td className="text-gray-600">{user.email}</td>
                <td className="flex gap-2">
                  <button className="btn btn-sm text-white" style={{ backgroundColor: "#18645e" }}>
                    Make Admin
                  </button>
                  <button className="btn btn-sm text-white" style={{ backgroundColor: "#18645e" }}>
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
