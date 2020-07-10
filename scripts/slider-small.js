// Slider-small
// Flirt variables as usually
// Our images will be in an array so first variable of slides array with objects where each of the objects will have the path to the image and both texts inside
const slideListS = [{
        source: './images/slider-images/slider-image-1.jpeg',
    },
    {
        source: './images/slider-images/slider-image-2.jpeg',
    },
    {
        source: './images/slider-images/slider-image-3.jpeg',
    },
    {
        source: './images/slider-images/slider-image-4.jpeg',
    },
    {
        source: './images/slider-images/slider-image-5.jpeg',
    },
    {
        source: './images/slider-images/slider-image-6.jpeg',
    },
];

// Now we can set time needed to slide automatic chaange
let slideTimeS = 5000;
// Object index
let activeSlideS = 0; // we already have information about the image in our html
// Time for changeble items to declare as variables
// image
const singleImageS = document.querySelector('img.slider--small');

// link to project
// const projectLink = document.querySelector('slide-link');
// indicatorsS variable - collecting to array /nodeList of singular elements/indicatorsS and we need to exchange it for casual array because the check method we want to use is not availible for nodeList so we need to use the square brqackets and spread operator to do that
const indicatorsS = [...document.querySelectorAll('.indicators-dots--small span')];
//---------------------------

// Functions:
//1b. Change Slides on arrow press
const changeSlidesOnArrowsS = (e) => {
        // disable interval to not working during the key press
        // clearInterval(slideInterval); // it will be exxecuted after keypress
        // //Set the slide on keypress
        // slideTimeS = 10000;
        // for check
        // now statement - first if any of defined keys was clicked or not and what to do if it was clicked
        if (e.keyCode === 37 || e.keyCode === 39) {
            // console.log(slideListS[activeSlideS]);
            // now we need to clear for a second the interval -  to start counting from the beginning
            clearInterval(slideIntervalS);
            // now thanks to ternary operator we can define the behaviour dependend of the key pressed
            e.keyCode === 37 ? activeSlideS-- : activeSlideS++;
        }
        // Second condition which prevents to incrementing the infinite times of time
        if (activeSlideS === slideListS.length) {
            activeSlideS = 0;
        } else if (activeSlideS < 0) {
            activeSlideS = slideListS.length - 1;
        }
        // what to do on it - repeate of main function
        singleImageS.src = slideListS[activeSlideS].source;
        changeIndicatorS();
        slideIntervalS = setInterval(slideChangeS, slideTimeS);
    }
    // 1a.Function which chqanges classes on the indicarors
const changeIndicatorS = () => {
        // just for check
        // console.log('zmiana');
        // first we can check which indicator has the active class with method findIndex and callbacks boolean value
        //So if the indicator contains/has specified class returns true and we can use the variavle for that, 
        // It will alvays then returns the element only with class active
        const activeIndicatorS = indicatorsS.findIndex(el => el.classList.contains('active--small'));
        // So if we have that element we can now toggle the class active for ''
        indicatorsS[activeIndicatorS].classList.remove('active--small');
        // and now we can use our slider active index to add the class active to specified element
        indicatorsS[activeSlideS].classList.add('active--small');
    }
    // 1. Function which will change the slides
const slideChangeS = () => {
    // now we need to define statement when the slider should begin from the beginning, but because we firstly incrementing index we need to start from the index -1 because we firstly incrementing it to '0'.
    if (activeSlideS >= slideListS.length - 1) activeSlideS = -1;
    console.log(slideListS[activeSlideS]);
    // console.log(slideListS[activeSlideS].source);
    //just because we have already the first element with index 0 displayed than we can start the function from incrementing index
    activeSlideS++;
    // Now we can call the values of objects like that
    // image
    singleImageS.src = slideListS[activeSlideS].source;
    console.log(slideListS[singleImageS.src]);
    console.log(slideListS[activeSlideS].source);
    // here we can implement the function which change the indicator
    changeIndicatorS();
}

// // Variables for clicking change active class
// let indicatorAll = [...document.querySelectorAll('.indicators-dots--small span')];
//Function to change slide on click
// const switchSlideS = (el) => {
//     console.log(indicatorsS.indexOf(el));
// console.log(indicatorAll);
// let activeSlideSmall = indicatorAll.findIndex(el => el.classList.contains('active--small'));
// console.log(activeSlideSmall);
// console.log(indicatorAll[activeSlideSmall]);
// const activeIndicatorS = indicatorsS.findIndex(el => el.classList.contains('active--small'));
// console.log(activeIndicatorS);
// // So if we have that element we can now toggle the class active for ''
// indicatorsS[activeIndicatorS].classList.remove('active--small');
// // and now we can use our slider active index to add the class active to specified element
// indicatorsS[activeSlideS].classList.add('active--small');
// }


// Now implementation

// Set intervals can be implemented here
let slideIntervalS = setInterval(slideChangeS, slideTimeS);


//1b. If we click on the element we will call the EventListener on keypress
window.addEventListener('keydown', changeSlidesOnArrowsS);
// //attach function to span
;


// indicatorsS.forEach(el => el.addEventListener('click', switchSlideS));
// console.log(indicatorsS.indexOf(el))