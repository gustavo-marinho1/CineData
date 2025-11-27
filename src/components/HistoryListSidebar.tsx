import type { ItemHistory } from "@/lib/cineSliceHistory";
import { useSelector } from "react-redux";
import { CardHistory } from "./CardHistory";
import { useNavigate } from "react-router";
import { HistoryEmpty } from "./HistoryEmpty";
import { useSidebar } from "./ui/sidebar";

export const HistoryListSidebar = () => {

  const navigate = useNavigate();
  const { setOpenMobile } = useSidebar();

  // @ts-ignore
  const myHistory: ItemHistory[] = useSelector((state) => state.myHistory.myHistory);

  const handleClick = (imdbID: string) => {
    navigate(`/movie/${imdbID}`);
    setOpenMobile(false);
  }

  return (
    <>

      {(myHistory.length > 0) ? (
        <div className="grid grid-cols-2 gap-2">
          {myHistory.map((h, index) => (
            <div key={index} onClick={() => handleClick(h.imdbID)}>
              <CardHistory
                title={h.Title}
                imageUrl={h.Poster}
              />
            </div>
          ))}
        </div>
      ) : (
        <HistoryEmpty />
      )}

    </>
  )
}