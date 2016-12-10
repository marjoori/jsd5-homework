 /*
Create a customizable survey form.
A user should be able to type a survey question in a text box.
When the user adds the question to the survey, it should be automatically numbered and a text box should be added below it.
The form includes 2 sample questions as illustrations.
Each survey question should also include a "Remove question" button that a user can click to remove the question from the survey.

Your final code should do the following:
- Convert the existing code to use implicit iteration
- Implement at least one example of event delegation
- Chain at least 2 methods

Note: This project uses Bootstrap, which is a CSS framework that provides prebuilt styles using class names.
Make sure the new questions you add to the survey use the same class names as in the sample form questions to take advantage of Bootstrap styles.
*/

// $("#surveyList li").each(function() {
//     var $removeButton = $('<button>').html("Remove question");
//     $(this).append($removeButton);
// });


$(function() {
    //Creating and adding the remove button to the existing questions
    var $removeButton = $('<button>').html("Remove question");
    $("#surveyList li").append($removeButton);
    // adding the functionality to all the remove buttons that will exist in the "finalSurvey" div. 
    $("#finalSurvey").on("click" , "button" , function(event){
        event.preventDefault();
        console.log("hello");
        $(this).parent().remove();
    });


    // creating and adding the functionality to the add question button
    var $addButton = $("#addQuestion");
    $addButton.on("click",function(event){
            event.preventDefault(); 
            // Question value
            var newQuestion = $("#question").val();
            // Li + class
            var $newQuestionLi = $("<li>").addClass(".form-group padout");
            // label +  question value
            var $createLabel = $("<label>").text(newQuestion);
            // Li + Label 
            var $connectEl = $newQuestionLi.append($createLabel);
            // input + class
            var $formInput = $("<input>").addClass("form-control");
            // input + (li+label)
            var $addInput = $connectEl.append($formInput);
            // input + (li+label) + remove button
            var $addRemoveButton = $addInput.append("<button>" + "Remove question" + "</button>");
            // + Add to parent div
            $("#surveyList").append($addRemoveButton);
            $("#question").val("");
            console.log("hello");
    });

});