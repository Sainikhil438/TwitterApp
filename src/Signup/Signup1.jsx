import React, { useState } from "react";
import './Signup1.css';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from "@mui/material";
import { signUp } from "../Services/UserServices";

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

function Signup1({ setSignUpPage }) {

    const nameRegex = /^[a-zA-Z ]{2,45}$/;
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const confirmpasswordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;

    const [signupData, setSignupData] = useState({ name: "", email: "", password: "", confirmpassword: "" });
    const [errorData, setErrorData] = useState({
        nameError: false, nameHelper: "",
        emailError: false, emailHelper: "",
        passwordError: false, passwordHelper: "",
        confirmpasswordError: false, confirmpasswordHelper: ""
    });
    const takeName = (event) => {
        setSignupData((prev) => ({ ...prev, name: event.target.value }));
    };
    const takeEmail = (event) => {
        setSignupData((prev) => ({ ...prev, email: event.target.value }));
    };
    const takePassword = (event) => {
        setSignupData((prev) => ({ ...prev, password: event.target.value }));
    };
    const takeConfirmpassword = (event) => {
        setSignupData((prev) => ({ ...prev, confirmpassword: event.target.value }));
    };

    const submit = async () => {
        let nameTest = nameRegex.test(signupData.name);
        let emailTest = emailRegex.test(signupData.email);
        let passwordTest = passwordRegex.test(signupData.password);
        let confirmpasswordTest = confirmpasswordRegex.test(signupData.confirmpassword)
        if (nameTest === false) {
            setErrorData((prevData) => ({ ...prevData, nameError: true, nameHelper: "Enter correct Name", }))
        } else {
            setErrorData((prevData) => ({ ...prevData, nameError: false, nameHelper: "", }));
        } if (emailTest === false) {
            setErrorData((prevData) => ({ ...prevData, emailError: true, emailHelper: "Enter correct Email" }))
        } else {
            setErrorData((prevData) => ({ ...prevData, emailError: false, emailHelper: "" }))
        } if (passwordTest === false) {
            setErrorData((prevData) => ({ ...prevData, passwordError: true, passwordHelper: "Enter correct Password" }))
        } else {
            setErrorData((prevData) => ({ ...prevData, passwordError: false, passwordHelper: "" }))
        } if (confirmpasswordTest === false) {
            setErrorData((prevData) => ({ ...prevData, confirmpasswordError: true, confirmpasswordHelper: "Enter correct Password" }))
        } else {
            setErrorData((prevData) => ({ ...prevData, confirmpasswordError: false, confirmpasswordHelper: "" }))
        }
        // console.log(signupData)

        if(nameTest === emailTest === passwordTest === confirmpasswordTest === true) {
            let response = await signUp(signupData);
            console.log(response);
        }
    }

    


    const handleNextButton = () => {
        console.log(signupData)
    }


    const handleSignupClose = () => {
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
                        <p className="su-heading-part-1">Step 1 of 2</p>
                    </div>
                </div>
                <div className="su-sub-container-2">
                    <div className="su-sub-container-2-1">
                        <div className="su-container-1">
                            <p className="su-container-1-1">Create your account</p>
                        </div>
                        <div className="su-container-2">
                            <TextField className="su-container-2-1" label="Name" variant="outlined"
                                sx={textFieldStyle}
                                id="name"
                                size="large"
                                error={errorData.nameError}
                                helperText={errorData.nameHelper}
                                onChange={takeName} />
                            <TextField className="su-container-2-1" label="Email" variant="outlined"
                                sx={textFieldStyle}
                                id="email"
                                error={errorData.emailError}
                                helperText={errorData.emailHelper}
                                onChange={takeEmail} />
                            <TextField className="su-container-2-1" label="Password" variant="outlined"
                                sx={textFieldStyle}
                                type="password"
                                id="password"
                                error={errorData.passwordError}
                                helperText={errorData.passwordHelper}
                                onChange={takePassword} />
                            <TextField className="su-container-2-1" label="Confirm Password" variant="outlined"
                                sx={textFieldStyle}
                                type="password"
                                id="confirmpassword"
                                error={errorData.confirmpasswordError}
                                helperText={errorData.confirmpasswordHelper}
                                onChange={takeConfirmpassword} />

                        </div>
                        {/* <div className="su-container-3">
                            <p className="su-container-3-1">
                                <a href="#" className="su-container-3-1-1">Use email instead</a>
                            </p>
                        </div> */}
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
                            <button className="su-container-6-1" onClick={submit}>
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