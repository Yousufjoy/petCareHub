import Navbar from "@/components/Shared/Navbar";

export const metadata = {
  title: "petCareHub",
  description: "A Pet Store & Pet loving place",
};

export default function AdminLayout({ children }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
