import React from "react";
import './HomePage2.css';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import BallotIcon from '@mui/icons-material/Ballot';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MahatmaGandhi from '../images/MahatmaGandhi.jpg';
import Jawaan from '../images/jawaan.webp';



function HomePage2() {
    return (
        // <div className="th2-outer-container">
        <div className="th2-main-container">
            <div className="th2-sub-container-1">
                <div className="th2-sub-container-1-1">
                    <p className="th2-home-container-1">Home</p>
                </div>
                <div className="th2-sub-container-1-2">
                    <div className="th2-sub-container-1-2-1">
                        <p className="th2-home-container-2">For you</p>
                    </div>
                    <div className="th2-sub-container-1-2-2">
                        <p className="th2-home-container-3">Following</p>
                    </div>
                </div>
            </div>
            <div className="th2-sub-container-2">
                <div className="th2-sub-container-2-1">
                    <Avatar className="th2-sub-container-2-1-1" sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
                </div>
                <div className="th2-sub-container-2-2">
                    <div className="th2-container-1">
                        <p className="th2-container-1-1">What is happening?!</p>
                    </div>
                    <div className="th2-container-2">
                        <BrokenImageOutlinedIcon sx={{ fontSize: '20px', color: "blue" }} />
                        <GifBoxOutlinedIcon sx={{ fontSize: '20px', color: "blue" }} />
                        <BallotIcon sx={{ fontSize: '20px', color: "blue" }} />
                        <SentimentSatisfiedAltOutlinedIcon sx={{ fontSize: '20px', color: "blue" }} />
                        <CalendarTodayIcon sx={{ fontSize: '20px', color: "blue" }} />
                        <LocationOnOutlinedIcon sx={{ fontSize: '20px', color: "blue" }} />
                    </div>
                </div>
                <div className="th2-sub-container-2-3">
                    <button className="th2-button-1">
                        <p className="th2-sub-container-2-3-1">Post</p>
                    </button>
                </div>
            </div>
            <div className="th2-sub-container-3">
                <p className="th2-sub-container-3-1">Show 2 posts</p>
            </div>
            <div className="th2-sub-container-4">
                <div className="th2-sub-container-4-1">
                    <div className="th2-sub-container-4-1-1">
                        <Avatar className="th2-sub-container-2-1-1" sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
                    </div>
                    <div className="th2-sub-container-4-1-2">
                        <div className="th2-mini-1">
                            <p className="th2-mini-1-1">sai nikhil</p>&nbsp;&nbsp;
                            <p className="th2-mini-1-2">@sainikhil392999</p>&nbsp;&nbsp;
                            <span className="th2-mini-1-2">&#8226;</span>&nbsp;
                            <p className="th2-mini-1-2"> Oct 2</p>
                        </div>
                        <div className="th2-mini-2">
                            <p className="th2-mini-2-1">Remembering Mahatma Gandhi on Gandhi Jayanthi</p>&nbsp;
                            <p className="th2-mini-2-2">#GandhiJayanthi</p>
                        </div>
                    </div>
                    <div className="th2-sub-container-4-1-3">
                        <MoreHorizIcon sx={{ color: "gray" }} />
                    </div>
                </div>
                <div className="th2-sub-container-4-2">
                    <div className="th2-sub-container-4-2-1">
                        <img className="th2-gandhi-pic" src={MahatmaGandhi} alt="Image" />
                    </div>
                </div>
            </div>


            <div className="th2-sub-container-4">
                <div className="th2-sub-container-4-1">
                    <div className="th2-sub-container-4-1-1">
                        <Avatar className="th2-sub-container-2-1-1">S</Avatar>
                    </div>
                    <div className="th2-sub-container-4-1-2">
                        <div className="th2-mini-1">
                            <p className="th2-mini-1-1">Sai Pavan Ganesh</p>&nbsp;&nbsp;
                            <p className="th2-mini-1-2">@saipavanganesh777</p>&nbsp;&nbsp;
                            <span className="th2-mini-1-2">&#8226;</span>&nbsp;
                            <p className="th2-mini-1-2"> Oct 2</p>
                        </div>
                        <div className="th2-mini-2">
                            <p className="th2-mini-2-1">SRK's latest film breaking his all previous records</p>&nbsp;
                            <p className="th2-mini-2-2">#SRK, #Jawaan</p>
                        </div>
                    </div>
                    <div className="th2-sub-container-4-1-3">
                        <MoreHorizIcon sx={{ color: "gray" }} />
                    </div>
                </div>
                <div className="th2-sub-container-4-2">
                    <div className="th2-sub-container-4-2-1">
                        <img className="th2-gandhi-pic" src={Jawaan} alt="Image" />
                    </div>
                </div>
            </div>


        </div>
        // </div>
    )
}
export default HomePage2