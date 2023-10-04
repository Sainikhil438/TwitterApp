import React from "react";
import './Messages.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


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

function Messages() {
    return (
        <div className="m-main-container">
            <div className="m-subcontainer-1">
                <div className="m-subcontainer-1-1">
                    <p className="m-para-1">Messages</p>
                </div>
                <div className="m-subcontainer-1-2">
                    <SettingsIcon sx={{ color: "white" }} />
                </div>
                <div className="m-subcontainer-1-2">
                    <EmailOutlinedIcon sx={{ color: "white" }} />
                </div>
            </div>
            <div className="m-search-subcontainer">
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
            <div className="m-para-container">
                <p className="m-para-container-1">All Conversations</p>
            </div>
            <div className="m-subcontainer-2">
                <div className="m-subcontainer-2-1">
                    <div className="m-container-1">
                        <Avatar>S</Avatar>
                    </div>
                    <div className="m-container-2">
                        <div className="m-container-2-1">
                            <p className="m-para-2">Sai Pavan Ganesh</p>
                            <p className="m-para-3"><span className="m-span-1">&#8226;</span> Oct 3rd&nbsp;</p>
                        </div>
                        <div className="m-container-2-2">
                            <p className="m-para-4">Going to Hyderabad.</p>
                        </div>
                    </div>
                </div>
                <div className="m-subcontainer-2-2">
                    <div className="m-container-1">
                        <Avatar sx={{ backgroundColor: "orange" }}>S</Avatar>
                    </div>
                    <div className="m-container-2">
                        <div className="m-container-2-1">
                            <p className="m-para-2">Srikanth</p>
                            <p className="m-para-3"><span className="m-span-1">&#8226;</span> Oct 2nd&nbsp;</p>
                        </div>
                        <div className="m-container-2-2">
                            <p className="m-para-4">You shared a post.</p>
                        </div>
                    </div>
                </div>
                <div className="m-subcontainer-2-3">
                    <div className="m-container-1">
                        <Avatar sx={{ backgroundColor: "aqua" }}>N</Avatar>
                    </div>
                    <div className="m-container-2">
                        <div className="m-container-2-1">
                            <p className="m-para-2">Nikhil</p>
                            <p className="m-para-3"><span className="m-span-1">&#8226;</span> Oct 1st&nbsp;</p>
                        </div>
                        <div className="m-container-2-2">
                            <p className="m-para-4">You shared a post.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Messages