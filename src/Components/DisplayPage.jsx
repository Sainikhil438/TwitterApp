import React, { useState } from "react";
import './DisplayPage.css';
import TwitterImage from '../images/TwitterImage.png';
import GoogleImage from '../images/GoogleImage.png';
import AppleImage from '../images/AppleImage.png';
import Signin from "../Signin/Signin";
import Signup1 from "../Signup/Signup1";


function DisplayPage() {
    const [signinPage, setSignInPage] = useState();
    const [signupPage, setSignUpPage] = useState();

    const handleSignIn = () =>{
        setSignInPage(true)
    }

    const handleSignUp = () =>{
        setSignUpPage(true)
    }

    return (
        <div className="t-main-page">
            <div className="t-sub-page">
                <div className="t-logo-part">
                    <div className="t-logo-part-1">
                        <img className="t-logo-image" src={TwitterImage} alt="Image" />
                    </div>
                </div>
                <div className="t-description-part">
                    <div className="t-description-subpart">
                        <div className="t-description-1">
                            <p className="t-heading-1">Happening now </p>
                        </div>
                        <div className="t-description-2">
                            <p className="t-heading-2">Join today.</p>
                        </div>
                        <div className="t-description-3">
                            <button className="t-button-1">
                                <img className="t-google-image" src={GoogleImage} alt="Google" />&nbsp;
                                <p className="t-button-1-1">Sign up with Google</p>
                            </button>
                        {/* </div>
                        <div className="t-description-4"> */}
                            <button className="t-button-1">
                                <img className="t-google-image" src={AppleImage} alt="Apple" />&nbsp;
                                <p className="t-button-1-1">Sign up with Apple</p>
                            </button>
                        </div>
                        <div className="t-description-5">
                            <p className="t-or-part">-----------------or-----------------</p>
                        </div>
                        <div className="t-description-6">
                            <button onClick={handleSignUp} className="t-button-3">
                                <p className="t-button-3-1">Create account</p>
                                </button>
                        </div>
                        <div className="t-description-7">
                            <p className="t-description-7-1">By signing up, you agree to the &nbsp;
                            <a className="t-description-7-1-1" href="#">Terms of Service</a>  and &nbsp;<br/> 
                            <a className="t-description-7-1-1" href="#">Privacy Policy</a> , including &nbsp;
                            <a className="t-description-7-1-1" href="#">Cookie Use.</a>
                            </p>
                        </div>
                        <div className="t-description-8">
                            <p className="t-description-8-1">Already have an account?</p>
                        </div>
                        <div className="t-description-9">
                            <button onClick={handleSignIn} className="t-button-4">
                                <p className="t-button-4-1">Sign in</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="t-links-part"></div>
            <div>{signinPage ? <Signin setSignInPage={setSignInPage}/> : ""}</div>
            <div>{signupPage ? <Signup1 setSignUpPage={setSignUpPage}/> : ""}</div>
        </div>
    )
}
export default DisplayPage;