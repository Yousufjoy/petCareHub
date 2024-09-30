import Navbar from "@/components/Shared/Navbar";

export const metadata = {
  title: "petCareHub",
  description: "A Pet Store & Pet loving place",
};

export default function UserLayout({ children }) {
  return (
    <>
      <div>
        User SideBar
        {children}
      </div>
    </>
  );
}
