// Dynamic navigation changing on scroll - Event Listener
// The active Links function
const activeLinks = (event) => {
    let navigationLinks = [...document.querySelectorAll('.main-navigation__menu-item__link')];
    // console.log(navigationLinks);
    // The place from where the links should be activated
    let toply = window.scrollY;
    // Added new size for containers

    // Now the togling the active links class to each element of our list of links - array
    navigationLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        // console.log(section);
        if (
            section.offsetTop <= toply && section.offsetTop + (section.offsetHeight) > toply) {
            link.classList.add('active-links');
        } else {
            link.classList.remove('active-links');
        }
    })

}

// Dynamic navigation changing on scroll - Event Listener
window.addEventListener('scroll', activeLinks);