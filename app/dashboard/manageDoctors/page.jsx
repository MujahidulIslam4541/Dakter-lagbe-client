import React from "react";

const ManageDoctors = () => {
  // Sample doctors data (static)
  const doctors = [
    {
      id: 1,
      name: "Zemlak, Daniel and Leannon",
      specialty: "Cardiologist",
      picture: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    },
    {
      id: 2,
      name: "Carter, Angela",
      specialty: "Neurologist",
      picture: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    },
    {
      id: 3,
      name: "Smith, John",
      specialty: "Dermatologist",
      picture: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    },
  ];

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        All Doctors: {doctors.length}
      </h2>

      <div className="overflow-x-auto rounded-lg border border-base-content/10 bg-white shadow-sm">
        <table className="table table-zebra w-full">
          <thead className="bg-[#18645e] text-white">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-100">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={doc.picture} alt={doc.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-medium text-gray-700">{doc.name}</td>
                <td className="text-gray-600">{doc.specialty}</td>
                <td>
                  <div className="flex gap-2">
                    <button
                      className="btn btn-xs btn-ghost text-[#18645e]"
                      onClick={() => alert("Doctor Details feature coming soon!")}
                    >
                      Details
                    </button>
                    <button
                      className="btn btn-xs text-white"
                      style={{ backgroundColor: "#18645e" }}
                      onClick={() => alert("Delete feature coming soon!")}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
