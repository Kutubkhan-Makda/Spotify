import { useRecoilValue } from "recoil"
import { playlistState } from "../atoms/PlaylistAtoms"
import Song from "./Song"

function Songs() {
  const playlist = useRecoilValue(playlistState)

  return (
    <div className="text-white px-8 flex flex-col space-y-1 pb-28">
      {playlist?.tracks.items.map((track,i) => <div>
        <Song key={track.track.id} track={track} order={i}/>
      </div>)}
    </div>
  )
}

export default Songs