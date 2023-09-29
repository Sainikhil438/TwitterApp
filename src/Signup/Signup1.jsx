import React from "react";
import './Signup1.css';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from "@mui/material";

const textFieldStyle = {
    '& .MuiInputLabel-root': {
        color: 'gray', 
      },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray', 
      },
      '& input': {
        color: 'white', 
      },
    },
  };

function Signup1({setSignUpPage}) {

    const handleSignupClose = () =>{
        setSignUpPage(false);
    }
    return (
        <div className="su-outer-container">
            <div className="su-main-container">
                <div className="su-sub-container-1">
                    <div className="su-close-part">
                        <CloseIcon onClick={handleSignupClose} className="su-close-part-1" />
                    </div>
                    <div className="su-heading-part">
                        <p className="su-heading-part-1">Step 1 of 5</p>
                    </div>
                </div>
                <div className="su-sub-container-2">
                    <div className="su-sub-container-2-1">
                        <div className="su-container-1">
                            <p className="su-container-1-1">Create your account</p>
                        </div>
                        <div className="su-container-2">
                            <TextField className="su-container-2-1" label="Name" variant="outlined"
                            sx={textFieldStyle} />
                            <TextField className="su-container-2-1" label="Phone" variant="outlined" 
                            sx={textFieldStyle}/>
                        </div>
                        <div className="su-container-3">
                            <p className="su-container-3-1">
                                <a href="#" className="su-container-3-1-1">Use email instead</a>
                            </p>
                        </div>
                        <div className="su-container-4">
                            <div className="su-container-4-1">
                                <p className="su-container-4-1-1">Date of birth</p>
                            </div>

                            <div className="su-container-4-2">
                                <p className="su-container-4-2-1">This will not be shown publicly. Confirm your own age,
                                    even if this account is for a business, a pet, or something else.</p>
                            </div>
                        </div>
                        <div className="su-container-5">
                            <input id="su-container-5-1" className="su-container-5-1" type="date"
                            />
                        </div>
                        <div className="su-container-6">
                            <button className="su-container-6-1">
                                <p className="su-container-6-2">Next</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup1