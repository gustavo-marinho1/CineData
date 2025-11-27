import { LogoIcon } from "@/assets/logo-icon";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-white">
      <div className="size-8 text-primary text-cyan-500">
        <LogoIcon />
      </div>
      <h1 className="text-white font-bold leading-tight tracking-tight -mt-1" style={{fontSize: "25px"}}>CineData</h1>
    </div>
  )
}