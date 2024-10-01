"use client";
import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const AdminLayout = ({ children }) => {
  const { data: session } = useSession();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleProducts = () => setIsProductsOpen((prev) => !prev);
  const toggleDrawer = () => setIsOpen((prev) => !prev);
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/api/auth/signin" });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white
          transform transition-transform duration-300 ease-in-out
          ${
            isMobile
              ? isOpen
                ? "translate-x-0"
                : "-translate-x-full"
              : "translate-x-0"
          }
        `}
      >
        {/* <Link to= "/admin-dashboard> */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold">
            <Link href={"/admin-dashboard"}>Dashboard</Link>
          </h2>
          {isMobile && (
            <button onClick={toggleDrawer} className="md:hidden text-white">
              <FaTimes size={24} />
            </button>
          )}
        </div>
        <nav className="mt-4">
          <ul className="space-y-2 px-4">
            <li>
              <button
                onClick={toggleProducts}
                className="flex justify-between items-center w-full p-2 hover:bg-gray-700 rounded"
              >
                Products
                <span
                  className={`ml-2 transition-transform duration-200 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {isProductsOpen && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    <Link
                      href="/admin-dashboard/addproducts"
                      className="block p-2 hover:bg-gray-600 rounded"
                    >
                      Add Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin-dashboard/productlist"
                      className="block p-2 hover:bg-gray-600 rounded"
                    >
                      Product List
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/admin-dashboard/orders"
                className="block p-2 hover:bg-gray-700 rounded"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                href="/admin-dashboard/adoptions"
                className="block p-2 hover:bg-gray-700 rounded"
              >
                Adoptions
              </Link>
            </li>
            <li>
              <Link
                href="/admin-dashboard/customers"
                className="block p-2 hover:bg-gray-700 rounded"
              >
                Customers
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            {isMobile && (
              <button
                onClick={toggleDrawer}
                className="text-gray-500 hover:text-gray-600"
                aria-label="Open sidebar"
              >
                <FaBars size={24} />
              </button>
            )}

            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>

            <div className="flex items-center">
              {session?.user?.image && (
                <Image
                  src={session.user.image}
                  alt="Admin Profile"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
              )}
              <button
                onClick={handleLogout}
                className="text-white bg-red-500 hover:bg-red-600 rounded px-4 py-2"
              >
                Logout
              </button>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
