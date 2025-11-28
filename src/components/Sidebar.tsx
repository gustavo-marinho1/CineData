import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import { MyListButton } from "./MyListButton";
import { LogoSidebar } from "./LogoSidebar";
import { HistoryListSidebar } from "./HistoryListSidebar";
 
export function AppSidebar() {

  const { setOpenMobile } = useSidebar();
  
  const closeSideBar = () => {
    setOpenMobile(false);
  }

  return (
    <Sidebar>

      <SidebarHeader className="h-15 bg-slate-950 justify-center">
        <LogoSidebar />
      </SidebarHeader>

      <SidebarContent className="bg-gradient-to-bl from-slate-900 to-gray-950">
        <div className="p-2 flex flex-col gap-3">

          <Link to="/my-list" onClick={() => closeSideBar()}>
            <MyListButton />
          </Link>

          <div className="flex flex-col gap-2">
            <h3 className="text-white text-md font-bold leading-tight tracking-tight">Search history</h3>
            <HistoryListSidebar />
          </div>

        </div>
      </SidebarContent>

      <SidebarFooter className="bg-black p-1">
        <a href="https://github.com/gustavo-marinho1" target="_blank" rel="noopener noreferrer" className="text-center">
          <span className="text-white text-sm">Github</span>
        </a>
      </SidebarFooter>

    </Sidebar>
  )
}