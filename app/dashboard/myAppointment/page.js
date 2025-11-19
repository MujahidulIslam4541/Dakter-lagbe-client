import React from "react";

const MyAppointment = () => {
  const today = new Date();
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options); // e.g., "Nov 20, 2025"

  // sample data
  const appointments = [
    { id: 1, name: "Cy Ganderton", service: "Quality Control Specialist", time: "10:00 AM" },
    { id: 2, name: "Hart Hagerty", service: "Desktop Support Technician", time: "11:30 AM" },
    { id: 3, name: "Brice Swyre", service: "Tax Accountant", time: "02:00 PM" },
  ];

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-700">My Appointments</h2>
        <button className="px-2 py-2 border-2 border-gray-300  rounded">{formattedDate}</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-base-content/10 bg-white shadow-sm">
        <table className="table table-zebra w-full">
          <thead className="bg-[#298b83] text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Service</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id} className="hover:bg-gray-100">
                <th>{appt.id}</th>
                <td className="font-medium text-gray-700">{appt.name}</td>
                <td>{appt.service}</td>
                <td className="text-gray-500">{appt.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
