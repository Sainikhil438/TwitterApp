import React from "react";
import './Explore.css';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Fashion from '../images/Fashion.jpg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';




const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '90%',
        borderRadius: '4em',
        color: 'gray',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50ch',
        },
    },
}));


function Explore() {
    return (
        <div className="e-main-container">
            <div className="e-main-container-1">
                <div className="e-container-1">
                    <Search className="th3-sub-container-1-1">
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </div>
                <div className="e-container-2">
                    <SettingsIcon sx={{ color: "white" }} />
                </div>
            </div>
            <div className="e-main-container-2">
                <div className="e-container-3">
                    <p className="e-container-3-1-1">For you</p>
                </div>
                <div className="e-container-3">
                    <p className="e-container-3-1">Trending</p>
                </div>
                <div className="e-container-3">
                    <p className="e-container-3-1">News</p>
                </div>
                <div className="e-container-3">
                    <p className="e-container-3-1">Sports</p>
                </div>
                <div className="e-container-3">
                    <p className="e-container-3-1">Entertainment</p>
                </div>
            </div>
            <div className="e-main-container-3">
                <div className="e-container-4">
                    <img className="e-container-image" src={Fashion} alt="Imge" />
                </div>
                <div className="e-container-5">
                    <div className="e-container-5-1">
                        <p className="e-container-5-1-1">Fashion &#8226; LIVE</p>
                    </div>
                    <div className="e-container-5-2">
                        <p className="e-container-5-2-1">Paris Fashion Week 2023</p>
                    </div>
                </div>
            </div>
            <div className="e-main-container-4">
                <div className="e-container-6">
                    <div className="e-container-6-1">
                        <div className="e-container-6-1-1">
                            <p className="e-para-1">Sports &#8226; Trending</p>
                        </div>
                        <div className="e-container-6-1-2">
                            <MoreHorizIcon sx={{ color: "gray"}}/>
                        </div>
                    </div>
                    <div className="e-container-6-2">
                        <p className="e-para-2">#WLeague</p>
                    </div>
                    <div className="e-container-6-3">
                        <p className="e-para-3">1,340 posts</p>
                    </div>
                </div>
                <div className="e-container-7">
                <div className="e-container-6-1">
                        <div className="e-container-6-1-1">
                            <p className="e-para-1">Entertainment &#8226; Trending</p>
                        </div>
                        <div className="e-container-6-1-2">
                            <MoreHorizIcon sx={{ color: "gray"}}/>
                        </div>
                    </div>
                    <div className="e-container-6-2">
                        <p className="e-para-2">#FahadhFaasil</p>
                    </div>
                    <div className="e-container-6-3">
                        <p className="e-para-3">Trending with 
                        <span className="e-span-1">#Thalaivar170, #RanaDaggubati</span></p>
                    </div>
                </div>
                <div className="e-container-8">
                <div className="e-container-6-1">
                        <div className="e-container-6-1-1">
                            <p className="e-para-1">Sports &#8226; Trending</p>
                        </div>
                        <div className="e-container-6-1-2">
                            <MoreHorizIcon sx={{ color: "gray"}}/>
                        </div>
                    </div>
                    <div className="e-container-6-2">
                        <p className="e-para-2">#PAKvsAUS</p>
                    </div>
                    <div className="e-container-6-3">
                        <p className="e-para-3">8,558 posts</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Explore