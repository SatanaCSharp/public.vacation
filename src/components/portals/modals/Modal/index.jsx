import React from "react";
import Portal from "../../Portal";
import { Buttons } from  "../../../";
import "./modal.scss"
const Modal = ({title, isOpen = true, onClose, children }) => {

    return (
        <>
            { isOpen &&
            <Portal>
                <section className="modal-overlay">
                    <section className="modal-window">
                        <section className="modal-window__header">
                            <span className="title">{title}</span>
                            <span className="icon-close">
                                <Buttons.CloseButton handleButtonClick={onClose}/>
                            </span>
                        </section>
                        <section className="modal-window__body">
                            {children}
                        </section>
                    </section>
                </section>
            </Portal>
            }
        </>
    )
}
export default Modal