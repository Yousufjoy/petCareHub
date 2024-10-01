import AdminLayout from "../components/AdminLayOut";

export const metadata = {
  title: "petCareHub",
  description: "A Pet Store & Pet loving place",
};

export default function AdminDashboardLayout({ children }) {
  return (
    <>
      <AdminLayout>{children}</AdminLayout>
    </>
  );
}
