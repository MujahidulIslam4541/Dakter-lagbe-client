import Navbar from "../components/navbar/page";


export default function MainLayout({ children }) {
  return (
    <div className="">
      <main className="min-h-screen">
        {children}
      </main>
    </div>
  );
}
