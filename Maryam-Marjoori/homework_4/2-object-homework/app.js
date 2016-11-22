/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.


// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. Below is an example - please write your answer in the same format.
  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here

    // "Browser-based calendar"
    // Description: Our browser-based calendar keeps track of things.
    // Every 'browser-based calendar' has
        // - a calendar
            //    - visual interface to display ,Year, month, day
            //    - visual interface to display hour , minute , second
            // Every 'calendar' can
            //    - Add events
            //    - Remove events
            //    - Edit exsiting events

        // - a browser
            // - name
            // - version
            // - plugin
            // - resolution
            // - settings
            // Every browser can
            // - change size
            // - scroll
            // - enable/doiable plugins

        // - a device which the browser is viewd from
            // - Type
            // - brand
            // - Model
            // - settings
            // Every device can
            // - be turned on or off
            // - cause the browser to load a different set of style sheets

        // - a user who is using the calendar
            // - Full Name
            // - User name
            // - Password
            // - preferrences
            // Every user can
            // - create an account for the calendar
            // - Share calandar with other


// Answer Ends Here


// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

var pet_owner;

// Answer Starts Here

var pet_owner= {
  ownerName : " ",
  ownerAddress : " "
};

// Answer Ends Here


// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.

  // Pet
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'pet' has:
  // - a name
  // - a species
  // - a breed
  // - a noise that it can make (e.g. 'bark', 'meow', etc.)
  // Every pet can:
  // - make noise (each pet makes its own unique noise, as specified by `noise`.

var some_pet;

// Answer Starts Here

var some_pet = {
  name: " ",
  species: " ",
  breed: " ",
  noise: [],
  makeNoise : function(noise){
  }
};

// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done! 

/////////////////////////////////////////////////////////////
