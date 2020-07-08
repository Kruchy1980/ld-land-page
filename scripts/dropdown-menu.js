// The dropdown button logic
const dropdownContent = document.querySelector('#dropper');
const dropdownButton = document.querySelector('#js-dropdown-button');
// The function for dropping down the menu
const dropMenu = () => {
        // console.log(event.target);
        dropdownContent.classList.toggle('show');
        dropdownButton.classList.toggle('active');
    }
    // Event-listener for dropdown menu button
dropdownButton.addEventListener('click', dropMenu);