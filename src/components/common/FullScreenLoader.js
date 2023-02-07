import React from "react";
import loader from "../../assets/img/Spinner.svg";

const FullScreenLoader = () => {
    return (
        <div className="ProcessingDiv">
            <div className="text-center" style={{marginTop: "150px"}}>
                <img className="loader-size" src={loader} alt="" />
            </div>
        </div>
    );
};

export default FullScreenLoader;
