/**========================================================================
 * *                                INFO
 *   A default modal component that can be used to display any content.
 *   Add the content you want to display in the modal as children.
 *   The height and width of the modal can be set using the height and width props.
 *   The modal can be closed by clicking the close button or by clicking outside the modal.
 *========================================================================**/

import React, { useEffect } from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface ModalProps { 
    children: React.ReactNode;
    height?: string;
    width?: string;
    onClose: () => void;
};

const Modal = ({ children, height, width, onClose }: ModalProps) => {
    /**========================================================================
     *                      Consts, Vars, and States
     *========================================================================**/
    const modalRef = React.useRef<HTMLDialogElement>(null);

    /**========================================================================
     *                           Functions
     *========================================================================**/

    /** 
     * Function to move the modal when the user drags it around
     * @param e - The mouse event
    */
    const handleDragModal = (e: React.MouseEvent) => {
        e.preventDefault();

        const modal = modalRef.current;
        if (!modal) return; // Ensure modal is defined

        // Calculate the offset between the cursor and the modal's top-left corner
        const offsetX = e.clientX - modal.getBoundingClientRect().left;
        const offsetY = e.clientY - modal.getBoundingClientRect().top;

        // The dragging part! :)
        const onMouseMove = (moveEvent: MouseEvent) => {
            modal.style.top = `${moveEvent.clientY - offsetY}px`;
            modal.style.left = `${moveEvent.clientX - offsetX}px`;
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    // ! TODO: Reimplement this function to allow resizing the modal
//     /**
//  * Function to resize the modal when the user drags the corners or sides
//  * @param e - The mouse event
// */
//     const handleResizeModal = (e: React.MouseEvent) => {
//         e.preventDefault();
//         const modal = modalRef.current;
//         if (!modal) return; 

//         const onMouseMove = (moveEvent: MouseEvent) => {
//             const newWidth = moveEvent.clientX - modal.getBoundingClientRect().left;
//             const newHeight = moveEvent.clientY - modal.getBoundingClientRect().top;

//             modal.style.width = `${newWidth}px`;
//             modal.style.height = `${newHeight}px`;
//         };

//         const onMouseUp = () => {
//             document.removeEventListener('mousemove', onMouseMove);
//             document.removeEventListener('mouseup', onMouseUp);
//         };

//         document.addEventListener('mousemove', onMouseMove);
//         document.addEventListener('mouseup', onMouseUp);
//     };

    /**
 * Function to close the modal when the user clicks outside of it
 * @param e - The mouse event
*/
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === modalRef.current?.parentElement) {
            onClose();
        }
    };

    return ( 
        <div className="modal__overlay" onClick={handleOverlayClick} >
            <dialog className="w-1/6 modal h-1/3" onClick={onClose} ref={modalRef} onMouseDown={handleDragModal}>
                <article className="modal__content" style={{ height: height, width: width }} onClick={(e) => e.stopPropagation()}>
                    <button className="modal__close-button" onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    {children}
                    {/* TODO: Reimplement the resize handle */}
                    {/* <div className='modal__resize-handle' onMouseDown={handleResizeModal} /> */}
                </article>
            </dialog>
        </div>
    );
 };

export default Modal;