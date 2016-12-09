/*

- Refactor the codealong to work with user interaction. In the index.html file
there is a "Get Consumer Finance Data" button. When the user clicks the button,
pull data from the provided link above (http://data.consumerfinance.gov/api/views.json).
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

- Separate your logic so that you can use your functions for another user button
click of "Get Custom Data". Interact with an API of your choice and handle both
success and error scenarios.

- Alternate data source: https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD
*/


//***************** defining the function *****************


function myFunction(url){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = responseMethod;
    function responseMethod(){
            if (xhr.readyState === 4 ){
                if (xhr.status === 200 ){
                    console.log(xhr.responseText);
                } else {
                    console.log("There was a problem with the request.")
                }
            }
        };
    xhr.open("GET" , url);
    xhr.send();
};

//**************** Getting Consumer finance data *****************

document.getElementById("getDataButton").addEventListener("click" , function(){
    var DataUrl = "http://data.consumerfinance.gov/api/views.json";
    myFunction(DataUrl);
});

//**************** Getting custome data **************************

document.getElementById("getCustomDataButton").addEventListener("click" , function(){
    var customeUrl = "https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD";
    myFunction(customeUrl);
});