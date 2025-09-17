import React, { useState } from "react" ; 
import Modal from "./modal";

const ModalTest = () => {
    const [showModal, setShowModal] = useState(false) ; 
    return(
        <div style={{textAlign: 'center'}}>
            <button onClick = {() => setShowModal(!showModal)}>
                Open Modal
            </button>
            <div>
                {
                    showModal && <Modal setShowModal={setShowModal}/>
                }
            </div>
        </div>
    )
}
export default ModalTest; 