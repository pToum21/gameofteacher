import qrc from 'qrcode'
import { useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
function QRCode() {
    const [imageSrc, setImageSrc] = useState('')
    const {qrCodeId} = useParams()
    useEffect(() => {
        qrc.toDataURL(`http://localhost:3000/qrcode/${qrCodeId}/scan`)
            .then(url => {
                setImageSrc(url)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    if (!imageSrc) {
        return <div>.....loading</div>
    }
    return (
        <img src={imageSrc} />
    )
}

export default QRCode;