// Variables needed for display the modal window
// Closing button
const closeButton = document.querySelector('.modal__close__button');

// Function closeModalInfo

const closeModalInfo = () => {
    const modalInfoDisplay = document.querySelector('.main-modal');

    modalInfoDisplay.classList.add('modal-display');
}

// Event for button
closeButton.addEventListener('click', closeModalInfo);
// Event for window
window.addEventListener('click', closeModalInfo);