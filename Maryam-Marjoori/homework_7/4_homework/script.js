/*
    Use the zippopotam.us service to look up and display the city and state for a zip code that users enter in the Postal Code box on the form.
    zippopotam.us does not require an API key. See the website zippopotam.us for API documentation for the U.S.
    Start by logging the city and state to the console. If you wish, you can enhance your code using DOM manipulation to populate the City and State input boxes with the data.
    Convert your event handler code to an IIFE and verify that your app still works the same way.
    Convert all of your JS code to a single IIFE and verify that the app still works the same way. 
    Bonus: 
      Instead of responding to a button click, add code to listen for the keyup event in the Postal Code box after a keyboard key is pressed and released, 
      and check if the Postal 
      Code box contains sufficient characters for a zip code before performing a search automatically.
*/

"use strict";
(function () {
    //var myData;
    var responseObject;
    var zip = $("#zip");

    function cbDisplayData(response){
      responseObject = response;
      var pickedCity = responseObject.places[0]["place name"];
      var pickedState = responseObject.places[0]["state abbreviation"];
      $("#city").val(pickedCity);
      $("#state").val(pickedState);
    };

//Regular event handler function expresion 
// $("#lookup").on("click" ,function(){
//     if(zip.val().length === 5 ){
//       $.ajax({
//       url: "http://api.zippopotam.us/us/" + zip.val() ,
//       cache: false,
//       dataType: "json",
//       type: "GET",
//       success: cbDisplayData
//       });
//     }
//     else { 
//       window.alert(zip.val() + " is not a real zipcode!");
//     }
// });

  $("#lookup").on("click" ,function(){
      if(zip.val().length === 5 ){
        $.ajax({
        url: "http://api.zippopotam.us/us/" + zip.val() ,
        cache: false,
        dataType: "json",
        type: "GET",
        success: cbDisplayData
        });
      }
      else { 
        window.alert(zip.val() + " is not a real zipcode!");
      }
  });
})();

