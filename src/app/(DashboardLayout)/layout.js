import Navbar from "@/components/Shared/Navbar";
import AdminSidebar from "./components/AdminLayOut";

export const metadata = {
  title: "petCareHub",
  description: "A Pet Store & Pet loving place",
};

export default function AdminLayout({ children }) {
  return <>{children}</>;
}
