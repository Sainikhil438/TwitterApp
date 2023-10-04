import React from "react";
import './Dashboard.css';
import HomePage1 from "../HomePage/HomePage1";
import HomePage2 from "../HomePage/HomePage2";
import HomePage3 from "../HomePage/HomePage3";
import Explore from "../Explore/Explore";
import Notifications from "../Notifications/Notifications";
import Messages from "../Messages/Messages";


function Dashboard(){
    return(
        <div className="ds-outer-layer">
            {/* <Messages/> */}
            <HomePage1/>
            {/* <HomePage2/> */}
            {/* <Explore/> */}
            {/* <Notifications/>
            <HomePage3/> */}
        </div>
    )
}
export default Dashboard