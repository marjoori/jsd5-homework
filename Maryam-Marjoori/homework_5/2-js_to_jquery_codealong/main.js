


// Convert favorites list to jQuery:
/*
//window.onload = function() {
$(document).ready(function() {
    //  var button = document.getElementById('new-thing-button');
        var $button = $("#new-thing-button");

    //  var thingList = document.getElementById('fav-list');
        var $thingList = $("#fav-list");

    //  var newThingInput = document.getElementById('new-thing');
        var $newThingInput = $("#new-thing");

    //  button.onclick = function(event) {
        $button.on("click", function(event) {

        event.preventDefault();

    //  var newThing = newThingInput.value;
        var newThing = $newThingInput.val();

    //  var newThingLi = document.createElement('li');
        var $newThingLi = $("<li>");

    //  var newThingText = document.createTextNode(newThing);
    //  newThingLi.appendChild(newThingText);
        $newThingLi.text(newThing);

    //  thingList.appendChild(newThingLi);
        $thingList.append($newThingLi);

    //  newThingInput.value = "";
        $newThingInput.val("");
  });
});
*/



var $button = $("#new-thing-button");
var $thingList = $("#fav-list");
var $newThingInput = $("#new-thing");

$(document).ready(function() {

    $button.on("click",function(event){
        event.preventDefault();
        var newThing = $newThingInput.val();
        var $newThingLi = $("<li>");
        $newThingLi.text(newThing);
        $thingList.append($newThingLi);
        $newThingInput.val(" ");

    });
});

