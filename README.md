# Overview

This projects is intended to provide a login system for the user. The login page will only 
accept certain criteria for passwords and all fields must be entered to be taken to the 
portfolio page, where the user gets a personalised welcome. From there the portfolio page 
acts as a way to showoff my skills as a developer.

# Things I learnt: 

 * I learnt about 'childElementCount' to ensure that you cannot keep adding                             text to the skills categories and that if a paragraph is selected again it will collapse.

 * Using the GET method & linking to other pages on form submissions - this enabled me                     to create a personalised welcome message to each user when they entered the portal page.

 * DOM manipulation - using previousElementSibling, firstElementChild, nextElementSibling                   and lastElementChild to move the languages carousel along by changing which element had                 the 'current' class applied to it depending on the circumstances.

 * Gained experience with the switch statement so that a user can use the circles                        below the language carousel to navigate, providing a better user experience.

# Issues encountered:

The **biggest** issue I faced was not knowing the syntax for what I wanted to do. To make sure I was able to complete the intended functionality I done lots of research into topics, such as DOM manipulation, so I had a more comprehensive understanding of what syntax was available and what it could do.

When I was coding the skill section JavaScript I encountered a problem that would not let me remove the text after adding it. My first step was to review the code that involved manipulating DOM children as this was new to me, which after doing tests and checking syntax it was fine. My next step was to review the function as a whole, which found that there was a previous line of code which removed the event listener.

While this worked to create the basic ability to add text to the grid it affected the users ability to remove the text when I wanted to go beyond the basics. Removing this fixed the issue and allows users to add/remove text.