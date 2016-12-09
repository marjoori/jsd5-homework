/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.
*/

// var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
// var apiKey = "";
// K2F(kelvin) --> ((kelvin + 273.0) / 100.0)

//**************************** Hidding and Loading the form  ****************************************

$("#wrapper").hide();
$(function(){
  $("#wrapper").slideDown();
});
'use strict';

// *************************************** API call **************************************************

// var myWeather = JSON.stringify(data);
var responseObject;

$(".ask-weather-button").on("click",function(event){
  event.preventDefault();
  $.ajax({
    url : "http://api.openweathermap.org/data/2.5/weather?q=" + "zip=" + $(".zip-field").val()  + "," + $(".country-field").val() + "?id=524901&APPID=" + "3d6ee100f4f433f217e03296860aa800",
    success: function(data){
        console.log(data);
        responseObject = data;

        
        // var statusHTML = "<p>";
        // statusHTML += "City: " + responseObject.name ;
        // statusHTML += " Tempreture: " + Math.ceil((responseObject.main.temp + 273.0) / 100.0)+ "&#8451;"; 
        // statusHTML += " Humidity: " + responseObject.main.humidity +"%" ;      
        // statusHTML += " " + responseObject.weather[0].description;
        // statusHTML += " Wind speed = " + responseObject.wind.speed + "</p>" ;
        // $("#wrapper").html(statusHTML);

         $(".weather-condition").hide();
         $(".weather-condition").text('');
         $(".weather-condition").append("<li>" + "City:"  + responseObject.name + "</li>");
         $(".weather-condition").append("<li>" + "Tempreture: " + Math.ceil((responseObject.main.temp * 9) / 5 - 459.67) + "&#176;" + "F" + "</li>");
         $(".weather-condition").append("<li>" + " Humidity: " + responseObject.main.humidity + "%" + "</li>");
         $(".weather-condition").append("<li>" + responseObject.weather[0].description + "</li>");
         $(".weather-condition").append("<li>" + "Wind speed = " + responseObject.wind.speed + "</li>");
         $(".weather-condition").slideDown();
         

        // reset the form
        $(".zip-field").val(""); 
        $(".country-field").val("");
    }
  });
});

