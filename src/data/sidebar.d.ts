export interface SidebarItem {
  id: number;
  title: string;
  path: string;
  icon: string;
}

export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: "🏠",
  },
  {
    id: 2,
    title: "Profile",
    path: "/profile",
    icon: "👤",
  },
  {
    id: 3,
    title: "Settings",
    path: "/settings",
    icon: "⚙️",
  },
  {
    id: 4,
    title: "Messages",
    path: "/messages",
    icon: "✉️",
  },
  {
    id: 5,
    title: "Logout",
    path: "/logout",
    icon: "🚪",
  },
];
