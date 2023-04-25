import React, { useEffect } from "react";
import Webcam from "react-webcam";

const Camera = () => {
    useEffect(() => {
        let myConstraints = {audio: true, video: {width: 1280, height: 720}}
        
        navigator.mediaDevices.getUserMedia(myConstraints).then(function (mediaStream) {
            console.log(mediaStream);
        }).catch(function (err) {
            console.log(err); 
        });
 
    }, []) 

    return (
        <Webcam />
    )
};

export default Camera;