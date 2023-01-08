import { useRecoilState } from "recoil";
import { currentTrackIdState } from "../atoms/songAtom";
import useSpotify from "../hooks/useSpotify";
import { millisToMinutsAndSecond } from "../lib/time";

function Song({order,track}) {
    const spotifyApi = useSpotify();

    const [currentTrackId,setCurrentTrackId] = useRecoilState(currentTrackIdState)

  return (
    <div className="grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer">
        <div className="flex items-center space-x-4">
            <p>{order+1}</p>
            <img className="h-10 w-10" src={track.track.album.images[0].url} alt="" />
            <div>
                <p className="w-36 lg:w-64 text-white truncate">{track.track.name}</p>
                <p className="w-40">{track.track.artists[0].name}</p>
            </div>
        </div>
        <div className="flex items-center justify-between ml-auto md:ml-0">
            <p className="w-40 hidden md:inline">{track.track.album.name}</p>
            <p>{millisToMinutsAndSecond(track.track.duration_ms)}</p>
        </div>
    </div>
  )
}

export default Song