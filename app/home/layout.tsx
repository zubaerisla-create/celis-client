// app/(dashboard)/layout.tsx

import Header from "@/component/Home/Header/Header";
import MobileSidebar from "@/component/Home/MobileSlidebar/MobileSlidebar";
import Sidebar from "@/component/Home/Slidebar/Slidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Desktop Sidebar - fixed */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Drawer */}
      <MobileSidebar />

      {/* Main content - margin adjust করা হয়েছে */}
      <div className="flex-1 flex flex-col lg:ml-64">
        <Header userName="John" />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}