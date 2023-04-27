import { React, useEffect, useRef } from 'react';
import Quagga from 'quagga';
import './BarcodeScanner.css'

const BarcodeScanner = (Props) => {
    const Container = useRef(null)
 
    const initScanner = () => {
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                constraints: {
                    width: Container.current.offsetWidth,
                    height: Container.current.offsetHeight,
                    facingMode: "environment"    
                },
                target: document.querySelector('#camera')    // Or '#yourElement' (optional)
            },
            decoder: {
                format: "code_128_reader",
                config: {
                    supplements: ["ean_reader", "ean_8_reader"] 
                }
            },
            locator: {
                halfSample: true,
                patchSize: "medium", // x-small, small, medium, large, x-large
                debug: {
                    showCanvas: false
                }
            }

        }, function (err) {
            if (err) {
                console.log(err);
                return
            }
            console.log("Initialization finished. Ready to start");
            Quagga.start();
        });
    }

    Quagga.onDetected((data) => {
        console.log(data.codeResult.code, 'RESULTADO');
    }); 

    useEffect(() => {
        console.log(Container.current.offsetWidth);
        console.log(Container.current.offsetHeight);
        initScanner()
    }, [])

    return (
        <>
            <div style={{width: Props.width ? Props.width : '100%', height: Props.height ? Props.height : '500px'}} ref={Container}>   
                <div id='camera' style={{width: '100%', height: '100%',position: 'relative', overflow: 'hidden'}} className='ContainerCamera'></div> 
            </div>
        </>
    )
}
export default BarcodeScanner;