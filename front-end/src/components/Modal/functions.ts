
// Surround the code with a DOMContentLoaded event listener; it makes sure that the DOM is
// loaded before grabbing the elements
document.addEventListener('DOMContentLoaded', () => { 
    /**------------------------------------------------------------------------
  *                           Variables
  *------------------------------------------------------------------------**/

const modal = document.querySelector('.modal') as HTMLDivElement;
const modalContent = document.querySelector('.modal__content') as HTMLDivElement;
const closeButton = document.querySelector('.modal__close-button') as HTMLButtonElement;
const modalHeight = modal.offsetHeight;
const modalWidth = modal.offsetWidth;

/**========================================================================
 **                            Functions
 *========================================================================**/

/** 
 * Function to move the modal when the user drags it around
 * @param e - The mouse event
*/
const dragModal = (e: MouseEvent) => {
    e.preventDefault();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    modal.style.top = `${mouseY - modalHeight / 2}px`;
    modal.style.left = `${mouseX - modalWidth / 2}px`;
};

/**
 * Function to close the modal when the user clicks outside of it
 * @param e - The mouse event
*/
const closeModal = (e: MouseEvent) => {
    e.preventDefault();
    // Check if the user clicked outside the modal
    if (e.target === modal) {
        // Close the modal
        modal.style.display = 'none';
    }
};

/**
 * Function to resize the modal when the user drags the corners or sides
 * @param e - The mouse event
*/ 
const resizeModal = (e: MouseEvent) => {
    e.preventDefault();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    modal.style.height = `${mouseY}px`;
    modal.style.width = `${mouseX}px`;
};

/**========================================================================
 *                           Listeners
 *========================================================================**/

// Add event listeners to the moda
modal.addEventListener('mousedown', (e) => {
    e.preventDefault();
    // Add event listeners to the document to move the modal
    document.addEventListener('mousemove', dragModal);
    document.addEventListener('mouseup', () => {
        // Remove the event listeners when the user releases the mouse button
        document.removeEventListener('mousemove', dragModal);
    });
});

// Add event listener to the modal to resize it when the user drags the corners or sides
modal.addEventListener('mousedown', (e) => {
    e.preventDefault();
    // Check if the user is clicking on the corners or sides of the modal
    if (e.target === modal) {
        // Add event listeners to the document to resize the modal
        document.addEventListener('mousemove', resizeModal);
        document.addEventListener('mouseup', () => {
            // Remove the event listeners when the user releases the mouse button
            document.removeEventListener('mousemove', resizeModal);
            });
        }
    });

// Add event listener to the close button
closeButton.addEventListener('click', (e) => {
    // Prevent the default behaviour of the close button
    e.preventDefault();
    // Close the modal
    modal.style.display = 'none';
});
});