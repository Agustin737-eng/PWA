import {React, useEffect, useState} from 'react'
import ReaderQR from './ReaderQR'; 
import BarcodeScanner from './BarcodeScanner';

const Scanner = (Props) => {
    const width = Props.width ? Props.width : '100%';
    const height = Props.height ? Props.height : '100%';
    return(
        <div style={{paddingInline:'3px'}}>
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