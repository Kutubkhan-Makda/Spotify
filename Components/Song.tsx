import useSpotify from "../hooks/useSpotify";
import { millisToMinutsAndSecond } from "../lib/time";

function Song({order,track}) {
    const spotifyApi = useSpotify();

  return (
    <div className="grid grid-cols-2">
        <div className="flex items-center space-x-4">
            <p>{order+1}</p>
            <img className="h-10 w-10" src={track.track.album.images[0].url} alt="" />
            <div>
                <p>{track.track.name}</p>
                <p>{track.track.artists[0].name}</p>
            </div>
        </div>
        <div className="flex items-center justify-between ml-auto md:ml-0">
            <p className="hidden md:inline">{track.track.album.name}</p>
            <p>{millisToMinutsAndSecond(track.track.duration)}</p>
        </div>
    </div>
  )
}

export default Song