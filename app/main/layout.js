import Footer from "../components/footer/page";
import Navbar from "../components/navbar/page";


export default function MainLayout({ children }) {
  return (
    <div className="">
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
}
