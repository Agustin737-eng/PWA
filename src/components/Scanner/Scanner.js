import {React, useEffect, useRef, useState} from 'react'
import ReaderQR from './ReaderQR'; 
import BarcodeScanner from './BarcodeScanner';

const Scanner = (Props) => {
    const Container = useRef(null)

    const width = Props.width ? Props.width : '100%';
    const height = Props.height ? Props.height : '100%'; 

    return(
        <div style={{width: width, height: height}} ref={Container}>  
            {Props.type == 'barcode' ?
                <BarcodeScanner
                    width={width}  
                    height={height}
                /> 
            : 
            <ReaderQR
                width={width}
                height={height}
            />}  
        </div>
    )
}

export default Scanner; 