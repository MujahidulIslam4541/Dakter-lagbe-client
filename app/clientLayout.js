"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const hideNavRoutes = ["/signIn", "/signUp"];
  const shouldHide = hideNavRoutes.includes(pathname);

  return (
    <>
      {!shouldHide && <Navbar />}
      {children}
      {!shouldHide && <Footer />}
    </>
  );
}
