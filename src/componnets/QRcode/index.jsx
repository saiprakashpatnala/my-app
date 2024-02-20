import { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const handleQrcode=()=>{
    setCode(name)
   setName("")

  }
  return (
    <div>
      <h1>QR code</h1>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button disabled={name.length===0} onClick={()=>handleQrcode()}>Generate</button>
      </div>
      <QRCode bgColor="#ffffff" size={400} id="qr-code-value" value={code} />
    </div>
  );
};

export default QrCode;
