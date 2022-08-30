import React, { useState, useEffect } from "react";
import "./samaei.css";
import img from "../Assert/bg4.png"
import axios from "axios"
import DarkMode from "../Darkbutton/dark";

function Samaei() {
    const [surahs, setSurahs] = useState([]);

    const fetchSurahs = async () => {
        const { data } = await axios.get(
            "http://api.alquran.cloud/v1/meta"
        );
        const surahs = data.data.surahs.references;
        setSurahs(surahs);
    };

    useEffect(() => {
        fetchSurahs();
    }, []);

    const Select = (event) => {
        let id = event.currentTarget.id;
    }


    return (
        <div
            style={{ backgroundImage: `url(${img})` }}
            className="samaei-page">

            <div className="samaei-head">
                <div> <DarkMode /> </div>
                <h1> وَإِذَا قُرِئَ ٱلْقُرْءَانُ فَٱسْتَمِعُواْ لَهُۥ وَأَنصِتُواْ لَعَلَّكُمْ تُرْحَمُونَ </h1>
            </div>

            <section>

                <div id="ayhaga" className=" con-of-sorah sec-cont container">
                    {surahs.map((item, index) => (
                        <div className="container" id={index + 1} key={index} onClick={Select}>
                            <div>
                                <p> {index + 1}: {item.name}</p>
                            </div>

                            <div className="nam-en">
                                <p> {item.englishName}</p>
                                <p> Ayahs : {item.numberOfAyahs}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </section>

        </div>
    );

};


export default Samaei;
