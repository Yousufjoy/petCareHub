export const metadata = {
  title: "petCareHub",
  description: "A Pet Store & Pet loving place",
};

export default function AdminDashboardLayout({ children }) {
  return (
    <>
      <div>
        {/* Same/Fixed Sidebar */}
        Admin Dashboard SideBar
        {/* Dynamic Content */}
        {children}
      </div>
    </>
  );
}
