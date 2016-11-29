
//**************************************************************************
// VANILA JAVA SCRIPT
//**************************************************************************


window.onload =  function (){
// The condition
    var totalBear = 99;
        for ( var count = totalBear ; count > 0 ; count-- ) {
            var countRemain = count - 1;
            var currentBottleText = (count > 1) ? 'bottles' : 'bottle';
            var remainingBottleText = (countRemain > 1) ? 'bottles' : 'bottle' ;

        // creating the html elements which I will need to write the lyrics in
            var listItemContainerOne = document.createElement("li");
            var listItemContainerTwo = document.createElement("li");
            var theSpacer = document.createElement("br");

        // Defining element's innerHTML
            listItemContainerOne.innerHTML =  count + ' ' + currentBottleText + " of beer on the wall , " + count + " " + currentBottleText + " of beer." ;   
            listItemContainerTwo.innerHTML = "Take one down and pass it around, " + countRemain + ' ' + remainingBottleText + " of beer on the wall." ;
        // adding them to the DOM
            document.getElementById("list-parent").appendChild(listItemContainerOne);
            document.getElementById("list-parent").appendChild(listItemContainerTwo);
            document.getElementById("list-parent").appendChild(theSpacer);
        }
};

//**************************************************************************
// JQUERY
//**************************************************************************


var totalBear = 99;

$(function() {
    for ( var count = totalBear ; count > 0 ; count-- ){
        var countRemain = count - 1;
        var currentBottleText = (count > 1) ? 'bottles' : 'bottle';
        var remainingBottleText = (countRemain > 1) ? 'bottles' : 'bottle' ;

        $("#list-parent").append("<li>" + count + ' ' + currentBottleText + " of beer on the wall , " + count + " " + currentBottleText + " of beer." + "</li>" );
        $("#list-parent").append("<li>" + "Take one down and pass it around, " + countRemain + ' ' + remainingBottleText + " of beer on the wall." + "</li>" );
        $("#list-parent").append("<br>");
    }
});