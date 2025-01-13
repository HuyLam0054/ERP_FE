import "@/styles/globals.css";
import { AdminHeader } from "@/components/layout/header/admin.header";
import { AdminSidebar } from "@/components/layout/sidebar/admin.sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`antialiased`}>
      <AdminHeader />
      <AdminSidebar />
      <div className="admin-content">{children}</div>
    </div>
  );
}
