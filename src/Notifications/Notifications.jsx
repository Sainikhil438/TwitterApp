import React from "react";
import './Notifications.css';
import SettingsIcon from '@mui/icons-material/Settings';
import TwitterImage from '../images/TwitterImage.png';
import Avatar from '@mui/material/Avatar';


function Notifications() {
    return (
        <div className="n-main-container">
            <div className="n-sub-container-1">
                <div className="n-container-1">
                    <p className="n-para-1">Notifications</p>
                </div>
                <div className="n-container-2">
                    <SettingsIcon sx={{ color: "white" }} />
                </div>
            </div>
            <div className="n-sub-container-2">
                <div className="n-sub-container-2-1">
                    <p className="n-para-2">All</p>
                </div>
                <div className="n-sub-container-2-1">
                    <p className="n-para-3">Verified</p>
                </div>
                <div className="n-sub-container-2-1">
                    <p className="n-para-3">Mentions</p>
                </div>
            </div>
            <div className="n-sub-container-3">
                <div className="n-list-1">
                    <div className="n-list-1-1">
                        <img className="n-image-1" src={TwitterImage} alt="Image" />
                    </div>
                    <div className="n-list-1-2">
                        <p className="n-para-4">There was a login to your account @sainikhil392999 from
                            a new device on Oct 01, 2023. Review it now.
                        </p>
                    </div>
                </div>
                <div className="n-list-1">
                    <div className="n-list-1-1">
                        <Avatar>S</Avatar>
                    </div>
                    <div className="n-list-1-2">
                        <p className="n-para-4">Sai Pavan Ganesh started following you.</p>&nbsp;&nbsp;&nbsp;
                        <p className="n-para-5">&#8226; Oct 1st</p>
                    </div>
                </div>

                <div className="n-list-1">
                    <div className="n-list-1-1">
                        <Avatar sx={{ backgroundColor: "orange"}}>S</Avatar>
                    </div>
                    <div className="n-list-1-2">
                        <p className="n-para-4">Srikanth posted about <span className="n-span-1">#PawanKalyan,#Janasena</span>.</p>&nbsp;&nbsp;&nbsp;
                        <p className="n-para-5">&#8226; Oct 2nd</p>
                    </div>
                </div>

                <div className="n-list-2"></div>
            </div>
        </div>
    )
}
export default Notifications