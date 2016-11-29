
//Solution One ***************************************************

// ***************************************************************
// CREATING MADLIP SENTENCE 
// ***************************************************************

// When the button is clicked 
// 1- String gets created
// 2- The string should get added to the html page within the h1 container

var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

function createNewStartUp(){
    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));
    document.getElementById("xForY").innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
    var madLipResult = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]; 
    return madLipResult ;
};

var madLipFucntionReturn = createNewStartUp();

document.getElementById("create").addEventListener("click", createNewStartUp);

// ***************************************************************
// CREATE FAVORIT STARTUP ARRAY
// ***************************************************************

var favStartup = [ ];
function saveStartup(){
    favStartup.push(madLipFucntionReturn);
};

document.getElementById("save").addEventListener("click" , saveStartup);

// ***************************************************************
// PRINT STARTUP ARRAY
// ***************************************************************



function printStartups(){
    var arrayElementContainer = document.createElement("p");
    arrayElementContainer.innerHTML = favStartup;

    document.getElementById("favorites").appendChild(arrayElementContainer);
    document.getElementById("favorites").appendChild(lineSpacer);
};

document.getElementById("print").addEventListener("click" , printStartups);



//Solution TWo (Crazy solution) ***************************************************

// function createNewStartUp(){
//     var hOne = document.getElementById("xForY");

//     hOne.innerHTML = " ";

//     var random1 = Math.floor((Math.random() * startupX.length));
//     var random2 = Math.floor((Math.random() * startupY.length));
    
//     var createSpan1 = document.createElement("span");
//     var firstPart = document.createTextNode("A startup that is ");
//     createSpan1.appendChild(firstPart);

//     var createSpan2 = document.createElement("span");
//     var secondPart = document.createTextNode(startupX[random1]);
//     createSpan2.appendChild(secondPart);
   
//     var createSpan3 = document.createElement("span");
//     var thirdPart = document.createTextNode(", but for ");
//     createSpan3.appendChild(thirdPart);

//     var createSpan4 = document.createElement("span");
//     var forthPart = document.createTextNode(startupY[random2]);
//     createSpan4.appendChild(forthPart);
// // QUESTION with this method, I created 4 text Nodes but I don't know how to cancatenate them and append the result to h1 ? The crazy way that I did it won't work'
// // it just repeats it self there for I had to set the innerHTML for h1 to empty string at the beggining
//     var partOne = document.getElementById("xForY").appendChild(createSpan1);
//     var partTwo = partOne.appendChild(createSpan2);
//     var partThree = partTwo.appendChild(createSpan3);
//     var partFour = partThree.appendChild(createSpan4);

// };

// document.getElementById("create").addEventListener("click", createNewStartUp);




