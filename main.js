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
    let targetCurrentElementParent = document.getElementById(getCurrentPage());
    let targetCurrentElementChild = document.getElementById(getCurrentPage()+'-wrapper');

    let targetNewElementParent = document.getElementById(getNewPage());
    let targetNewElementChild = document.getElementById(getNewPage()+'-wrapper');


    //Fade out current section element
    targetCurrentElementChild.classList.add('fadeOut');

    //set the visibility 
    window.setTimeout(function(){
        targetCurrentElementParent.style.visibility = 'hidden';
    },900);

    //Wait until the animation is done before we fadeIn and remove classes
    window.setTimeout(function(){
        targetCurrentElementParent.style.display = 'none';


        targetNewElementParent.style.visibility = 'visible';
        targetNewElementParent.style.display = 'flex';
        targetNewElementChild.classList.add('fadeIn');


        //Wait until the fadeIn animation is done before removing it
        window.setTimeout(function(){
            targetCurrentElementChild.classList.remove('fadeOut');
            targetNewElementChild.classList.remove('fadeIn');


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
