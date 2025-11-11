export const getAllDoctors = async () => {
  const res = await fetch("http://localhost:3000/doctors.json");
  const data = await res.json();
  return data;
};
