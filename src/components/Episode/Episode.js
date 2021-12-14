import React from 'react'

export const Episode = ({episode}) => {
    const { id, img,title, originalAirDate, desc, } = episode;
    console.log(id);
    return (
        <div className="col-lg-4 px-3 hello mx-auto service " >
            <div className="p-3">
                <img src="https://media.comicbook.com/2021/08/marvel-what-if-nick-fury-poster-1280180.jpeg?auto=webp&width=900&height=1333&crop=900:1333,smart" className="img-fluid" alt=""></img>
            </div>
            <div className="p-3">
            <h4 className="my-3 p-3 fw-bold" style={{ color: "#d31724", backgroundColor: "", borderRadius: "5px", height:"100px" }}>     <i class="far fa-clock"></i> {title}<i class="far fa-map"></i> </h4>
                <h5 className="fs-bold" style={{ color: "#ff7c5b" }}>{originalAirDate} <small className="fs-6 mb-3" style={{ color: "gray" }}></small></h5>
                
                <p style={{ color: "white" }}>{desc}</p>
                {/* <p>{description}</p> */}
                    <button className="btn btn-dark regular-btn ">
                        Watch Now
                    </button>
                
            </div>

        </div >


    )
}
export default Episode;