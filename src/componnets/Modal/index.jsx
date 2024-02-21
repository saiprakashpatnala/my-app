import { useState } from "react";
import CustomModal from "../CustomModal";
const Modal = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
        {!toggle && <button onClick={() => setToggle(!toggle)}>Modal Popup open</button>}
     
      {toggle && (
        <CustomModal
          id={1}
          body={<h1>This is customized body</h1>}
          header={<h1>This is customized header</h1>}
          footer={<h1>This is customized footer</h1>}
        />
      )}
    </div>
  );
};

export default Modal;
