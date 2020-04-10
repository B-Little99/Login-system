





Things I learnt: 

    To ensure that you could also remove the skills text if you clicked again I learnt about the childElementCount JavaScript which I utilised in my functions to determine if the text should be added or removed.

    lastChild


Issues encountered:

    There was a problem with the code that when I added the else if statement to remove a child element on a second click if there was already the text in the div that it would not occur. Firstly I reviewed all my code that I had added to the else if statement since I was new to working with child element syntax so initially thought it could be that. There did not seem to be any errors so I moved onto to reviewing the whole function and noticed that previously to stop the user being able to add the same text I used the removeEventListener and once that was removed the issue was fixed and the user can click to add the text and then remove the text if they click again.