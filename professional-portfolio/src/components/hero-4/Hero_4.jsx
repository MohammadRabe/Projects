import { useState } from "react"
import TrackCard from "./TrackCard";
import { Rate } from "antd"

const Hero_4 = () => {
    const [tracks,setTracks] = useState([
        {id:1,trackName:'web design',oppositeText:'web application developement'},
        {id:2,trackName:'Mobile design',oppositeText:'mobile application developement'},
        {id:3,trackName:'logo design',oppositeText:'pwa developement'}
    ]);
  return (
    <div id="hero-4" className="hero hero-4">
        <h1 className="heading text-md-start text-center text-dark">
            Portfolio 
        </h1>
            
        <div className="cards row gy-5 mt-5">
            {tracks.map((track,index)=>{
                return(
                    <TrackCard 
                    key={track.id}
                    trackName={track.trackName}
                    oppositeText={track.oppositeText}
                    count={index+1}
                    />
                );
            })}
        </div>
    </div>
  )
}

export default Hero_4