import { LogoIcon } from "@/assets/logo-icon";

export const LogoSidebar = () => {
  return (
    <div className="flex items-center gap-2 text-white">
      <div className="size-7 text-primary text-cyan-500">
        <LogoIcon />
      </div>
      <h1 className="text-white font-bold leading-tight tracking-tight -mt-[3px]" style={{fontSize: "20px"}}>CineData</h1>
    </div>
  )
}