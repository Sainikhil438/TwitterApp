import React from "react";
import './HomePage3.css';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Gandhiji from '../images/Gandhiji.webp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';




// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
    
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
    
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '30ch',
//         },
//     },
// }));



function HomePage3() {
    return (
        <div className="th3-main-container">
            <div className="th3-sub-container">
                <div className="th3-sub-container-1">
                    {/* <Search className="th3-sub-container-1-1">
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search> */}
                    {/* <input className="th3-sub-container-1-2" type="search" placeholder="Search">
                    </input> */}
                    <div className="th3-searchbar">
                        <SearchIcon className="th3-searchbar-1" sx={{ color: "lightgray" }}/>
                        <p className="th3-searchbar-2">Search</p>
                    </div>
                </div>
                <div className="th3-sub-container-2">
                    <div className="th3-sub-container-2-1">
                        <div className="th3-container-2-1">
                            <p className="th3-container-2-1-1">Subscribe to Premium</p>
                        </div>
                        <div className="th3-container-2-2">
                            <p className="th3-container-2-2-1">Subscribe to unlock new features and if eligible,
                                receive a share of ads revenue.</p>
                        </div>
                        <div className="th3-container-2-3">
                            <button className="th3-container-button1">
                                <p className="th3-subscribe">Subscribe</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="th3-sub-container-3">
                    <div className="th3-sub-container-3-1">
                        <div className="th3-sub-container-3-1-1">
                            <p className="th3-container-3-1">What’s happening</p>
                        </div>
                        <div className="th3-sub-container-3-1-2">
                            <div className="th3-container-3-2">
                                <div className="th3-container-3-2-1">
                                   <p className="th3-qoute-1"> &#8226; October 2nd</p>
                                </div>
                                <div className="th3-container-3-2-2">
                                    <p className="th3-qoute-2">Gandhi Jayanthi</p>
                                </div>
                            </div>
                            <div className="th3-container-3-3">
                                <img className="th3-image-1" src={Gandhiji} alt="Image" />
                            </div>

                        </div>
                        <div className="th3-sub-container-3-1-3">
                            <div className="th3-container-3-4">
                                <div className="th3-container-3-5">
                                    <div className="th3-container-3-5-1">
                                        <p className="th3-trend">Trending in India</p>
                                    </div>
                                    <div className="th3-container-3-5-2">
                                        <MoreHorizIcon sx={{ color: "lightgray" }}/>
                                    </div>
                                </div>
                                <div className="th3-container-3-6">
                                    <p className="th3-trend-details">#ICCCricketWorldCup</p>
                                </div>
                                <div className="th3-container-3-7">
                                    <p className="th3-trend-count">14.4K posts</p>
                                </div>
                            </div>
                        </div>
                        <div className="th3-sub-container-3-1-4">
                        <div className="th3-container-3-4">
                                <div className="th3-container-3-5">
                                    <div className="th3-container-3-5-1">
                                        <p className="th3-trend">Trending in India</p>
                                    </div>
                                    <div className="th3-container-3-5-2">
                                        <MoreHorizIcon sx={{ color: "lightgray" }}/>
                                    </div>
                                </div>
                                <div className="th3-container-3-6">
                                    <p className="th3-trend-details">#Earthquake</p>
                                </div>
                                <div className="th3-container-3-7">
                                    <p className="th3-trend-count">11.8K posts</p>
                                </div>
                            </div>
                        </div>
                        <div className="th3-sub-container-3-1-5">
                        <div className="th3-container-3-4">
                                <div className="th3-container-3-5">
                                    <div className="th3-container-3-5-1">
                                        <p className="th3-trend">Entertainment &#8226; Trending</p>
                                    </div>
                                    <div className="th3-container-3-5-2">
                                        <MoreHorizIcon sx={{ color: "lightgray" }}/>
                                    </div>
                                </div>
                                <div className="th3-container-3-6">
                                    <p className="th3-trend-details">#Thalaivar170Team</p>
                                </div>
                                <div className="th3-container-3-7">
                                    <p className="th3-trend-count">12.5K posts</p>
                                </div>
                            </div>
                        </div>
                        <div className="th3-sub-container-3-1-6">
                        <div className="th3-container-3-4">
                                <div className="th3-container-3-5">
                                    <div className="th3-container-3-5-1">
                                        <p className="th3-trend">Trending in India</p>
                                    </div>
                                    <div className="th3-container-3-5-2">
                                        <MoreHorizIcon sx={{ color: "lightgray" }}/>
                                    </div>
                                </div>
                                <div className="th3-container-3-6">
                                    <p className="th3-trend-details">#AnjaliSharma</p>
                                </div>
                                <div className="th3-container-3-7">
                                    <p className="th3-trend-count">2154 posts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage3