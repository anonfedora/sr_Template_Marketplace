import { SidebarSec } from "../seller/components/context/sidebarContext";

export interface MenuItem {
  icon: React.ReactNode;
  label: string;
  id: SidebarSec;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}
