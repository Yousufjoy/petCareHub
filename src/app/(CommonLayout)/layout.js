import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

export const metadata = {
  title: "petCareHub",
  description: "A Pet Store & Pet loving place",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
}
