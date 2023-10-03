import React from "react";
import './Dashboard.css';
import HomePage1 from "../HomePage/HomePage1";
import HomePage2 from "../HomePage/HomePage2";
import HomePage3 from "../HomePage/HomePage3";
import Explore from "../Explore/Explore";


function Dashboard(){
    return(
        <div className="ds-outer-layer">
            <HomePage1/>
            {/* <HomePage2/> */}
            <Explore/>
            <HomePage3/>
        </div>
    )
}
export default Dashboard