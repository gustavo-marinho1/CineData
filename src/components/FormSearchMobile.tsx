import { useNavigate } from "react-router";
import { SearchIcon } from "../assets/search-icon";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export const FormSearchMobile = () => {

  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [opened, setOpened] = useState<boolean>(false);

  const changeSearch = (s: string) => {
    setSearch(s);
  }

  const handleSearch = () => {
    if (search.length > 0) {
      navigate(`/search/${search}`);
      setOpened(false);
    }
  }

  return (
    <Dialog open={opened} onOpenChange={setOpened}>

      <DialogTrigger asChild>
        <Button className="sm:hidden rounded-md border cursor-pointer" style={{ padding: "8px", backgroundColor: "#3a3a3aff" }}>
          <span className="text-white">
            <SearchIcon width="21" height="21" />
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-slate-800 p-2 border-slate-800 top-10 rounded-md [&>button]:hidden sm:hidden">
        <form onSubmit={e => { e.preventDefault(); handleSearch(); }}>

          <label className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchIcon width="20" height="20" />
            </span>
            <input
              className={`
                form-input flex w-full flex-1 resize-none overflow-hidden rounded-lg bg-slate-950 pl-10 text-white placeholder:text-gray-400
                focus:outline-none h-10 px-4 text-sm font-normal leading-normal border border-gray-700 focus:border-gray-500
              `}
              placeholder="Search..."
              value={search}
              onChange={e => changeSearch(e.target.value)}
            />
          </label>

        </form>
      </DialogContent>

    </Dialog>
  )
}