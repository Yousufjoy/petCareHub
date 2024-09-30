export const metadata = {
  title: "petCareHub",
  description: "A Pet Store & Pet loving place",
};

export default function AdminDashboardLayout({ children }) {
  return (
    <>
      <div>
        Admin Dashboard SideBar
        {children}
      </div>
    </>
  );
}
