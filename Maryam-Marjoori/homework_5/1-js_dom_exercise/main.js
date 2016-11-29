
/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"

*/

/*

A- I need to define for the DOM which button it is that clicking it will trigger a function that adds a new item and I need to save that button in a variable
B- I need to create a function that when that button is clicked runs and do the follwing:

**** 1- Get the input field which user writes the text in and save it into a variable (I am doing this because later I want to assign a value to this 
        input field which is an empty string.)
**** 2- Saves the value that the user writes in the input field into a variable 
**** 3- Since that value is a string I need to convert it to a text node.
**** 4- Now I have a text Node that is floating around. I needs to create an html elemnet as a parent for this node. (li)
**** 5- I need to put the next Node inside the html container
**** 6- I need to add the parent element to the DOM 
**** 7- I need to assignn ann empty string to the input field so after user adds the text to the list, the field is ampty again.
*/

//A - Define the button
var myButton = document.getElementById("new-thing-button");
//B- Function
myButton.onclick = function(event) {

  event.preventDefault();
  //B-1
  var inputHolder = document.getElementById("new-thing");
  //B-2
  var inputHolderValue = inputHolder.value;

  if(inputHolderValue === " " || inputHolderValue === null) {
      window.prompt("Oops! You didn't write any of your favorit things.");
  } 
  else 
  {
      //B-3
      var userInput = document.createTextNode(inputHolderValue);
      //B-4
      var inputContentWrapper = document.createElement("li");    
      //B-5
      inputContentWrapper.appendChild(userInput);
      //B-6
      document.getElementById("fav-list").appendChild(inputContentWrapper);
      //B-6
      inputHolder.value = " ";
    }

  };


// **************************************** Questions
// Why I couldn't append my userinput directly to ul ? didn't we before directly append a child to body element?
// If I submit empty the first time the promt won't work


