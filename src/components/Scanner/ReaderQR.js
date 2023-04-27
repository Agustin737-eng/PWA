import { React, useState, useEffect, useRef } from 'react'
import { QrReader } from 'react-qr-reader';

const ReaderQR = (Props) => {
    const [codesQR, setCodesQR] = useState([])
    const Container = useRef(null)

    const [constraints, setConstraints] = useState(null);

    const handleScan = (result, error) => {
        if (result != undefined && codesQR.find((code) => code.text == result.text) == undefined) {
            codesQR.push(result)
            setCodesQR([...codesQR])
        }
    }

    useEffect(() => {
        setConstraints({
            audio: true,
            facingMode: 'environment',
            width: Container.current.offsetWidth,
            height: Container.current.offsetHeight,
        })
    }, [])

    return (
        <div style={{ width: Props.width ? Props.width : '100%', height: Props.height ? Props.height : '500px', boxSizing: 'border-box' }} ref={Container}>
            {constraints!=null?
                <QrReader
                    onResult={handleScan}
                    constraints={constraints}
                    scanDelay={Props.delay ? Props.delay : false}
                    videoContainerStyle={{ width: constraints.width, height: constraints.height, paddingTop: '0%' }} 
                    videoStyle={{ width: '100%', height: '100%' }} 
                />
                :<h1>Cargando..</h1>
            }
        </div>
    )

}

export default ReaderQR;