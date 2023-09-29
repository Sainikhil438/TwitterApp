import React, { useState } from "react";
import './Signin.css';
import CloseIcon from '@mui/icons-material/Close';
import TwitterImage1 from '../images/TwitterImage.png';
import GoogleImage1 from '../images/GoogleImage.png';
import AppleImage1 from '../images/AppleImage.png';
import { TextField } from "@mui/material";
import DisplayPage from "../Components/DisplayPage";


const customTextFieldStyle = {
    '& .MuiInputLabel-root': {
        color: 'gray', 
      },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray', 
      },
    },
  };

function Signin({setSignInPage}) {

    const handleSigninClose = ()=>{
        setSignInPage(false)
    }
    return (
        <div className="si-main-container">
            <div className="si-sub-contaier">
                <div className="si-sub-contaier-1">
                    <div className="si-top-container-1">
                        <CloseIcon 
                        onClick={handleSigninClose} 
                        className="si-icon-1" /></div>
                    <div className="si-top-container-2"><img className="si-image-1" src={TwitterImage1} alt="Image" /></div>
                </div>
                <div className="si-sub-contaier-2">
                    <div className="si-container-2-1">
                        <div className="si-container-1">
                            <p className="si-container-1-1">Sign in to X</p>
                        </div>
                        <div className="si-container-2">
                            <button className="si-button-1">
                                <img className="si-google-image" src={GoogleImage1} alt="Google" />&nbsp;
                                <p className="si-button-1-1">Sign in with Google</p>
                            </button>
                            <button className="si-button-1">
                                <img className="si-google-image" src={AppleImage1} alt="Apple" />&nbsp;
                                <p className="si-button-1-1">Sign in with Apple</p>
                            </button>
                        </div>
                        <div className="si-container-3">
                            <p className="si-container-3-1">--------------or----------------</p>
                        </div>
                        <div className="si-container-4">
                            <TextField className="si-container-4-1" id="si-container-4-1" label="Phone, email, or username" variant="outlined"
                            sx={customTextFieldStyle}
                            />
                        </div>
                        <div className="si-container-5">
                            <button className="si-button-5-1">
                                <p className="si-next-button">Next</p>
                            </button>
                            <button className="si-button-5-2">
                                <p className="si-forgot-button">Forgot password?</p>
                            </button>
                        </div>
                        <div className="si-container-6">
                            <p className="si-container-6-1">Don't have an account?<a className="si-container-6-2" href="#">Sign up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signin;