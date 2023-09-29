import React from "react";
import './Signup2.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Signup2(){
    return(
        <div className="su2-outer-page">
            <div className="su2-main-container">
                <div className="su2-sub-container-1">
                    <div className="su2-arrow-part">
                        <ArrowBackIcon className="su2-arrow-part-1"/>
                    </div>
                    <div className="su2-heading-part">
                        <p className="su2-heading-part-1">Step 2 of 5</p>
                    </div>
                </div>
                <div className="su2-sub-container-2">
                    <div className="su2-sub-container-2-1">
                        <div className="su2-container-1"></div>
                        <div className="su2-container-2"></div>
                        <div className="su2-container-3"></div>
                        <div className="su2-container-4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup2