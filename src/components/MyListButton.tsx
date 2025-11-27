import { AddList } from "@/assets/add-list";

export const MyListButton = () => {
  return (
    <div className="flex gap-1 items-center bg-gray-800 hover:bg-slate-800 rounded-md p-2 pr-3 transition-colors">
      <div className="p-0.5">
        <AddList size="w-5 h-5" />
      </div>
      <span className="-mt-[1px] text-white text-sm font-medium">My List</span>
    </div>
  )
}