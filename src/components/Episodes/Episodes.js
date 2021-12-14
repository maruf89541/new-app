import React, { useEffect, useState } from 'react'
import Episode from '../Episode/Episode'

export const Episodes = () => {
    const [episodes, setepisodes] = useState([])
    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/episodes')
            .then(res => res.json())
            .then(data => setepisodes(data))
    }, [])
    return (
        <div className="container" >
            <h1 className="text-center my-5">Our Most Popular<span style={{ color: "#ff7c5b" }} >Adventures</span></h1>
            <div className="row gy-3 " >
                {

                    episodes?.map(episode=><Episode
                    key={episode}
                    episode={episode}
                    ></Episode>)
                }
            </div >
        </div>
        )
}
export default Episodes;
