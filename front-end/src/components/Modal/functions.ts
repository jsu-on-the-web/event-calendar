
// Surround the code with a DOMContentLoaded event listener; it makes sure that the DOM is
// loaded before grabbing the elements
document.addEventListener('DOMContentLoaded', () => { 
        /**------------------------------------------------------------------------
     *                           Variables
     *------------------------------------------------------------------------**/

    const modal = document.querySelector('.modal') as HTMLDialogElement;
    const modalOverlay = document.querySelector('.modal__overlay') as HTMLDivElement;
    const modalResizeHandle = document.querySelector('.modal__resize-handle') as HTMLDivElement;
    const closeButton = document.querySelector('.modal__close-button') as HTMLButtonElement;

    /**========================================================================
     **                            Functions
    *========================================================================**/

    /** 
     * Function to move the modal when the user drags it around
     * @param e - The mouse event
    */
    const dragModal = (e: MouseEvent) => {
        e.preventDefault();

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


    /**
     * Function to close the modal when the user clicks outside of it
     * @param e - The mouse event
    */
    const closeModal = (e: MouseEvent) => {
        e.preventDefault();
        // Check if the user clicked outside the modal
        if (e.target === modalOverlay) {
            // Close the modal
            modal.close();
            modalOverlay.style.display = 'none';
            modalOverlay.removeEventListener('click', closeModal);
            // Let the user click through the modal
            modalOverlay.style.pointerEvents = 'none';
        }
    };

    /**
     * Function to resize the modal when the user drags the corners or sides
     * @param e - The mouse event
    */ 
    const resizeModal = (e: MouseEvent) => {
        e.preventDefault();

        const onMouseMove = (moveEvent: MouseEvent) => {
            const newWidth = moveEvent.clientX - modal.getBoundingClientRect().left;
            const newHeight = moveEvent.clientY - modal.getBoundingClientRect().top;

            modal.style.width = `${newWidth}px`;
            modal.style.height = `${newHeight}px`;
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    /**========================================================================
     *                           Listeners
     *========================================================================**/

    // Add event listeners to the modal
    modal.addEventListener('mousedown', (e) => {
        if (e.target === modalResizeHandle) return; // Need this to prevent conflict with the resize handle
        dragModal(e);
    });

    // Add event listener to the modal to resize it when the user drags the corners or sides
    modalResizeHandle.addEventListener('mousedown', (e) => {
        resizeModal(e);
    });

    // Add event listener to the close button
    closeButton.addEventListener('click', (e) => {
        // Prevent the default behaviour of the close button
        e.preventDefault();
        // Close the modal
        modal.style.display = 'none';
    });

    // Add an event listener for closing the modal when the user clicks outside of it
    modalOverlay.addEventListener('click', (e) => {
        closeModal(e);
    });
});