//Parent nodes I will attach the text to.
let problemSolvingDiv = document.getElementById("divProblemSolving");
let commsDiv = document.getElementById("divComms");
let programmingDiv = document.getElementById("divProgramming");
let timeManageDiv = document.getElementById("divTimeManagement");
let initiativeDiv = document.getElementById("divInitiative");
let leadershipDiv = document.getElementById("divLeadership");
let divSkill = document.getElementsByClassName("divSkill");

//This adds the text for the problem solving area under skills
problemSolvingDiv.addEventListener("click", addSolvingText);

function addSolvingText() {
    let divCount = document.getElementById("divProblemSolving").childElementCount;

    if (divCount === 1) {
        let problemSolvingP = document.createElement("p");
        problemSolvingP.classList = "skillsPara";
        problemSolvingP.innerText = "Being able to quality check my work for errors was an important element to my role, ensuring I continually improved what I produced. A recent example is where a news article had a visual fault in the page. To fix the issue I looked at the HTML and CSS code, compared it to other code and researched to fix the issue.";
        problemSolvingDiv.appendChild(problemSolvingP);
        divSkill.height = "320";
    } else if (divCount > 1) {
        let lastPSchild = problemSolvingDiv.lastChild;
        problemSolvingDiv.removeChild(lastPSchild);
    }
}

//This adds the text for the communication area under skills
commsDiv.addEventListener("click", addCommsText);

function addCommsText() {

    let DivCount = document.getElementById("divComms").childElementCount;

    if (DivCount === 1) {
        let commsP = document.createElement("p");
        commsP.classList = "skillsPara";
        commsP.innerText = "As the primary news coordinator, I was responsible for contacting stakeholders with different levels of seniority in the business to source articles. This required different communication mediums, such as phone, face to face and email. During significant projects I needed to effectively update my team on my progress, which involved being clear and concise on what I had achieved.";
        commsDiv.appendChild(commsP);
    } else if (DivCount > 1) {
        let lastDivChild = commsDiv.lastChild;
        commsDiv.removeChild(lastDivChild);
    }
}

//This adds the text for the programming area under skills
programmingDiv.addEventListener("click", addProgrammingText);

function addProgrammingText() {

    let DivCount = document.getElementById("divProgramming").childElementCount;

    if (DivCount === 1) { 
        let programmingP = document.createElement("p");
        programmingP.classList = "skillsPara";
        programmingP.innerText = "Continuous research and work on a prototype website has provided me with a comprehensive understanding of HTML and CSS, recently applying JavaScript. I have learnt Git/GitHub and considerations for user experience (UX), accessibility and visual design has enabled me to improve quality.";
        programmingDiv.appendChild(programmingP);
    } else if (DivCount > 1) {
        let lastDivChild = programmingDiv.lastChild;
        programmingDiv.removeChild(lastDivChild);
    }
}

//This adds the text for the time management and organisation area under skills
timeManageDiv.addEventListener("click", addTimeManagementText);

function addTimeManagementText() {

    let DivCount = document.getElementById("divTimeManagement").childElementCount;

    if (DivCount === 1) { 
        let timeManagementP = document.createElement("p");
        timeManagementP.classList = "skillsPara";
        timeManagementP.innerText = "Continuous research and work on a prototype website has provided me with a comprehensive understanding of HTML and CSS, recently applying JavaScript. I have learnt Git/GitHub and considerations for user experience (UX), accessibility and visual design has enabled me to improve quality.";
        timeManageDiv.appendChild(timeManagementP);
    } else if (DivCount > 1) {
        let lastDivChild = timeManageDiv.lastChild;
        timeManageDiv.removeChild(lastDivChild);
    }
}

//This adds the text for the initative area under skills
initiativeDiv.addEventListener("click", addInitiativeText);

function addInitiativeText() {

    let DivCount = document.getElementById("divInitiative").childElementCount;

    if (DivCount === 1) { 
        let initiativeP = document.createElement("p");
        initiativeP.classList = "skillsPara";
        initiativeP.innerText = "Oftentimes, in my previous role I worked independently as well as in a team. A good example of this is the website redesign. When the project lead was away I identified a potential bug with a component on the system. Knowing that the bug warranty was running out I made the decision to contact our agency and log the issue, as it may have fallen out of the warranty and incur further costs if left any longer.";
        initiativeDiv.appendChild(initiativeP);
    } else if (DivCount > 1) {
        let lastDivChild = initiativeDiv.lastChild;
        initiativeDiv.removeChild(lastDivChild);
    }
}

//This adds the text for the leadership area under skills
leadershipDiv.addEventListener("click", addLeadershipText);

function addLeadershipText() {

    let DivCount = document.getElementById("divLeadership").childElementCount;

    if (DivCount === 1) { 
        let leadershipP = document.createElement("p");
        leadershipP.classList = "skillsPara";
        leadershipP.innerText = "Oftentimes, in my previous role I worked independently as well as in a team. A good example of this is the website redesign. When the project lead was away I identified a potential bug with a component on the system. Knowing that the bug warranty was running out I made the decision to contact our agency and log the issue, as it may have fallen out of the warranty and incur further costs if left any longer.";
        leadershipDiv.appendChild(leadershipP);
    } else if (DivCount > 1) {
        let lastDivChild = leadershipDiv.lastChild;
        leadershipDiv.removeChild(lastDivChild);
    }
}