// declare the variable of menu items

const homeLink = document.querySelector('.home');
const aboutLink = document.querySelector('.about');
const functionalitiesLink = document.querySelector('.functionalities');
const galleryLink = document.querySelector('.gallery');
const investmentLink = document.querySelector('.investment');
const contactLink = document.querySelector('.contact');

// main function which removes the active class from all of the links

const remAll = () => {
    homeLink.classList.remove('active');
    aboutLink.classList.remove('active');
    functionalitiesLink.classList.remove('active');
    galleryLink.classList.remove('active');
    investmentLink.classList.remove('active');
    contactLink.classList.remove('active');
}

// Toggling class function
const homeActiveClass = () => {
    // console.log('home click');
    remAll();
    homeLink.classList.toggle('active');
};
// Toggling class function
const aboutActiveClass = () => {
    // console.log('about click');
    remAll();
    aboutLink.classList.toggle('active');
};
// Toggling class function
const functionalitiesActiveClass = () => {
    // console.log('functionalities click');
    remAll();
    functionalitiesLink.classList.toggle('active');
};
// Toggling class function
const galleryActiveClass = () => {
    // console.log('gallery click');
    remAll();
    galleryLink.classList.toggle('active');
};
// Toggling class function
const investmentActiveClass = () => {
    // console.log('investment click');
    remAll();
    investmentLink.classList.toggle('active');
};
// Toggling class function
const contactActiveClass = () => {
    // console.log('contact click');
    remAll();
    contactLink.classList.toggle('active');
};

// Events for each of buttons
homeLink.addEventListener('click', homeActiveClass);
aboutLink.addEventListener('click', aboutActiveClass);
functionalitiesLink.addEventListener('click', functionalitiesActiveClass);
galleryLink.addEventListener('click', galleryActiveClass);
investmentLink.addEventListener('click', investmentActiveClass);
contactLink.addEventListener('click', contactActiveClass);