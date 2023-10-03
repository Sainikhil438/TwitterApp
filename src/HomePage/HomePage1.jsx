import React, { useState } from "react";
import './HomePage1.css';
import TwitterImage from '../images/TwitterImage.png';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";




function HomePage1() {

    const [option, setOption] = useState(false);

    const handleOptions = () => {
        setOption(!option);

    }

    const navigate = useNavigate();
    const handleLogOut = () => {
        if (localStorage.key) {
            localStorage.removeItem("twitter-token")
        }
        navigate("/")
    }
    return (
        // <div className="th1-outer-page">
        <div className="th1-sub-container">
            <div className="th1-sub-container-1">
                <div className="th1-sub-container-1-1">
                    <div className="th1-container-1">
                        <img className="th1-image-1" src={TwitterImage} alt="Image" />
                    </div>

                    <div className="th1-container-2">
                            <div className="th1-container-2-1">
                                <HomeIcon className="th1-container-2-1-image"
                                    sx={{ fontSize: '32px', color: "white" }} />
                            </div>
                            <div className="th1-container-2-2">
                                <p className="th1-container-2-2-1">Home</p>
                            </div>
                    </div>

                    <div className="th1-container-3">
                        <div className="th1-container-3-1">
                            <SearchIcon sx={{ fontSize: '32px', color: "white" }} />
                        </div>
                        <div className="th1-container-3-2">
                            <p className="th1-container-3-2-1">Explore</p>
                        </div>
                    </div>
                    <div className="th1-container-4">
                        <div className="th1-container-3-1">
                            <NotificationsIcon sx={{ fontSize: '32px', color: "white" }} />
                        </div>
                        <div className="th1-container-3-2">
                            <p className="th1-container-3-2-1">Notifications</p>
                        </div>
                    </div>
                    <div className="th1-container-5">
                        <div className="th1-container-3-1">
                            <MailOutlineIcon sx={{ fontSize: '32px', color: "white" }} />
                        </div>
                        <div className="th1-container-3-2">
                            <p className="th1-container-3-2-1">Messages</p>
                        </div>
                    </div>
                    <div className="th1-container-6">
                        <div className="th1-container-3-1">
                            <ListAltIcon sx={{ fontSize: '32px', color: "white" }} />
                        </div>
                        <div className="th1-container-3-2">
                            <p className="th1-container-3-2-1">Lists</p>
                        </div>
                    </div>
                    <div className="th1-container-7">
                        <div className="th1-container-3-1">
                            <PeopleOutlineIcon sx={{ fontSize: '32px', color: "white" }} />
                        </div>
                        <div className="th1-container-3-2">
                            <p className="th1-container-3-2-1">Communities</p>
                        </div>
                    </div>
                    <div className="th1-container-8">
                        <div className="th1-container-3-1">
                            <img className="th1-image-2" src={TwitterImage} alt="Image" />
                        </div>
                        <div className="th1-container-3-2">
                            <p className="th1-container-3-2-1">Premium</p>
                        </div>
                    </div>
                    <div className="th1-container-9">
                        <div className="th1-container-3-1">
                            <PermIdentityIcon sx={{ fontSize: '32px', color: "white" }} />
                        </div>
                        <div className="th1-container-3-2">
                            <p className="th1-container-3-2-1">Profile</p>
                        </div>
                    </div>
                    <div className="th1-container-10">
                        <div className="th1-container-3-1">
                            <PendingOutlinedIcon sx={{ fontSize: '32px', color: "white" }} />
                        </div>
                        <div className="th1-container-3-2">
                            <p className="th1-container-3-2-1">More</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="th1-sub-container-2">
                <div className="th1-sub-container-2-1">
                    <button className="th1-button-1"><p className="th1-post-line">Post</p></button>
                </div>
            </div>
            <div className="th1-sub-container-3">
                {option &&
                    <div className="th1-options">
                        <MenuItem sx={{ color: "white" }}>Add an existing account</MenuItem>
                        <MenuItem onClick={handleLogOut} sx={{ color: "white" }}>Log Out</MenuItem>
                    </div>}
                <div className="th1-sub-container-3-1" onClick={handleOptions}>
                    <div className="th1-sub-container-3-1-1">
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
                    </div>
                    <div className="th1-sub-container-3-1-2">
                        <div className="th1-name-container">
                            <p className="th1-name-container-1">sai nikhil</p>
                        </div>
                        <div className="th1-email-container">
                            <span className="th1-email-container-1">@sainikhil392999</span>
                        </div>
                    </div>

                    <div className="th1-sub-container-3-1-3">
                        <MoreHorizIcon sx={{ color: "white" }} />
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}
export default HomePage1