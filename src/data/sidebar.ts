export interface SidebarItem {
  id: number;
  title: string;
  path: string;
  icon: string;
  children?: SidebarItem[];
}

export const adminSidebarItems: SidebarItem[] = [
  {
    id: 1,
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: "🏠",
    children: [
      {
        id: 11,
        title: "Production Overview",
        path: "/admin/dashboard/production_overview",
        icon: "📊",
      },
      {
        id: 12,
        title: "Revenue",
        path: "/admin/dashboard/revenue",
        icon: "📊",
      },
      {
        id: 13,
        title: "Employee Performance",
        path: "/admin/dashboard/employee_performance",
        icon: "📊",
      },
      {
        id: 14,
        title: "Inventory Status",
        path: "/admin/dashboard/inventory_status",
        icon: "📊",
      },
      {
        id: 15,
        title: "Financial Reports",
        path: "/admin/dashboard/financial_reports",
        icon: "📊",
      },
    ],
  },
  {
    id: 2,
    title: "Production Management",
    path: "/admin/production",
    icon: "🏭",
    children: [
      {
        id: 21,
        title: "Production Orders",
        path: "/admin/production/orders",
        icon: "📜",
      },
      {
        id: 22,
        title: "Production Progress",
        path: "/admin/production/progress",
        icon: "🚀",
      },
      {
        id: 23,
        title: "Machine Management",
        path: "/admin/production/machines",
        icon: "🛠️",
      },
      {
        id: 24,
        title: "Quality Assurance",
        path: "/admin/production/quality_assurance",
        icon: "✔️",
      },
    ],
  },
  {
    id: 3,
    title: "Inventory Management",
    path: "/admin/inventory",
    icon: "📦",
    children: [
      {
        id: 31,
        title: "Product List",
        path: "/admin/inventory/product_list",
        icon: "📋",
      },
      {
        id: 32,
        title: "Stock Taking",
        path: "/admin/inventory/stock_taking",
        icon: "📈",
      },
      {
        id: 33,
        title: "Inbound/Outbound",
        path: "/admin/inventory/inbound_outbound",
        icon: "🔄",
      },
      {
        id: 34,
        title: "Material Management",
        path: "/admin/inventory/material_management",
        icon: "🏗️",
      },
    ],
  },
  {
    id: 4,
    title: "Sales & Distribution",
    path: "/admin/sales",
    icon: "💼",
    children: [
      {
        id: 41,
        title: "Sales Orders",
        path: "/admin/sales/orders",
        icon: "🛒",
      },
      {
        id: 42,
        title: "Customer Management",
        path: "/admin/sales/customers",
        icon: "👥",
      },
      {
        id: 43,
        title: "Shipping & Delivery",
        path: "/admin/sales/shipping",
        icon: "🚚",
      },
    ],
  },
  {
    id: 5,
    title: "Human Resources",
    path: "/admin/hr",
    icon: "👩‍💼",
    children: [
      {
        id: 51,
        title: "Employee Directory",
        path: "/admin/hr/employees",
        icon: "📇",
      },
      {
        id: 52,
        title: "Time Tracking",
        path: "/admin/hr/time_tracking",
        icon: "⏱️",
      },
      {
        id: 53,
        title: "Payroll",
        path: "/admin/hr/payroll",
        icon: "💰",
      },
      {
        id: 54,
        title: "Recruitment",
        path: "/admin/hr/recruitment",
        icon: "🔍",
      },
    ],
  },
  {
    id: 6,
    title: "Reports & Analytics",
    path: "/admin/reports",
    icon: "📊",
    children: [
      {
        id: 61,
        title: "Production Reports",
        path: "/admin/reports/production",
        icon: "📉",
      },
      {
        id: 62,
        title: "Sales Reports",
        path: "/admin/reports/sales",
        icon: "📈",
      },
      {
        id: 63,
        title: "Performance Analytics",
        path: "/admin/reports/performance",
        icon: "📊",
      },
    ],
  },
  {
    id: 7,
    title: "Settings",
    path: "/admin/settings",
    icon: "⚙️",
    children: [
      {
        id: 71,
        title: "System Configuration",
        path: "/admin/settings/configuration",
        icon: "🛠️",
      },
      {
        id: 72,
        title: "User Management",
        path: "/admin/settings/users",
        icon: "👥",
      },
      {
        id: 73,
        title: "Role & Permissions",
        path: "/admin/settings/roles",
        icon: "🔐",
      },
    ],
  },
];
