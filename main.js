"use strict"

let currentPage = 'home';
let newPage;


function navClick(event){
    
    /*
        On click we check to see if a new page was clicked, if so we change the content to the clicked page.
    */

    let newNavClick = event.target.className.toString().split(' ')[2];
        //Check to see if a different page was clicked.
        if(currentPage !== newNavClick ){
            setNewPage(newNavClick);
            contentChange();
            setCurrentPage(getNewPage());
        }
}

//this will change the content to the right page. 
function contentChange(){
    let targetCurrentElement = document.getElementById(getCurrentPage());
    let targetNewElement = document.getElementById(getNewPage());

    //Fade out current section element
    targetCurrentElement.classList.add('fadeOut');

    //Wait until the animation is done before playing the FadeIn animation on the new requested page
    window.setTimeout(function(){
        targetCurrentElement.style.display = 'none';
        targetCurrentElement.style.visibility = 'hidden';
        targetCurrentElement.classList.remove('fadeOut');
        
        targetNewElement.style.visibility = 'visible';
        targetNewElement.style.display = 'flex';
        targetNewElement.classList.add('fadeIn');

        //Wait until the fadeIn animation is done before removing it
        window.setTimeout(function(){
            targetNewElement.classList.remove('fadeIn');
        },1000);
    },1000);
}
//Getter & Setter functions for global variables;
function getCurrentPage(){
    return currentPage;
}
function setCurrentPage(page){
    currentPage = page;
}
function getNewPage(){
    return newPage;
}
function setNewPage(page){
    newPage = page;
}

//Add event listeners to our nav bar icons.
let iconList = document.getElementsByClassName("nav-icon");

for(let i = 0; i<iconList.length;i++){
    iconList[i].addEventListener('click', navClick);
}

document.getElementById("home-btn").addEventListener('click',navClick);
