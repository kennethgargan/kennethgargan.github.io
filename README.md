# 1 Page CV Theme for Kenneth.Gargan.ie (Kenneth-G.github.io)

[Live Version](https://kenneth.gargan.ie)

## Goals with this website:
-Create a website that can showcase my knowledge of HTML, CSS & Javascript

-Provide a clean layout.


## Design
From the start I had an idea of what I wanted it to look like. 

I've always liked the look of Fullscreen Background Image Websites.

I also thought it would be cool to have the content change on nav click without moving the page down.


## Layout

There are 5 sections to the layout. 

-Header

-Left-spacer

-Content

-Nav

-Footer

I used CSS Grid for the layout. It allowed me to set the different areas and have them scale accordling to screensize while also
making it a lot easier to change the layout on mobile device such as moving the nav bar to the top if the screen gets too small and 
expanding the content area to go the full width.


## How it works

I wanted to have at least 1 project in my portfolio where I use Javascript without any libraries or frameworks to show I have an understanding of core Javascript.

This website works by having the different sections (Home, About, Skills etc) already in the html.

I have my nav elements given a class name of the content they change to. 
When one is clicked, I have my JS get the name of which was clicked, from there 3 things happen:

-I give my current section the class of the fadeOut animaton. Once its faded out, I set the visibility none and the display to none so it doesn't take up any room

-I get the name of which nav was clicked and apply the fadeIn animation to the section with the same name and change the display to the correct one as well as set the visibility to visible

-I update the current page variable so I know which one I need to fadeOut the next time.

