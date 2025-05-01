/**========================================================================
 * *                                INFO
 *   A default modal component that can be used to display any content.
 *   Add the content you want to display in the modal as children.
 *   The height and width of the modal can be set using the height and width props.
 *   The modal can be closed by clicking the close button or by clicking outside the modal.
 *========================================================================**/

import React, { useEffect } from 'react';
import './index.scss';
import './functions.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface ModalProps { 
    children: React.ReactNode;
    height?: string;
    width?: string;
    onClose: () => void;
};

const Modal = ({ children, height, width, onClose }: ModalProps) => {
    return ( 
        <div className="modal__overlay" >
            <dialog className="w-1/6 modal h-1/3" onClick={onClose}>
                <article className="modal__content" style={{ height: height, width: width }} onClick={(e) => e.stopPropagation()}>
                    <button className="modal__close-button" onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    {children}
                    <div className='modal__resize-handle' />
                </article>
            </dialog>
        </div>
    );
 };

export default Modal;