import React from "react";

const DoctorProfile = async ({ params }) => {
  const { id } =  await params;
  console.log(id)

  return <div className="mt-20">doctors name {id}</div>;
};

export default DoctorProfile;
