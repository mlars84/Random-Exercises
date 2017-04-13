console.log('testing 1, 2, 3...');


function Dog (name, breed, tricksArray) {
  this.name = name;
  this.breed = breed;
  this.tricks = tricksArray;
  this.paws = 4;
  this.domesticated = true;
  this.bark = function () {
    alert("Hey! There might be something over there!");
  };
}

var puppy = new Dog ("Fritz", "Amstaff", ['sit', 'down', 'wait', 'come', 'off']);

var olderDog = new Dog ("Daisy", "American Bulldog", ['sit', 'lay down', 'stay', 'come', 'say mama']);

puppy.bark();

olderDog.bark();

console.log("Our new puppy's name is " + puppy.name + " and he is 6 months old.");

console.log('Daisy is an ' + olderDog.breed);

var someOtherDog = new Dog ("Larry", "Mutt", ["eats lots", "sleeps lots"]);


//Object.getPrototypeOf();
var dogQuote = "Woof! woof! grrr..";

console.log(Object.getPrototypeOf(dogQuote));

console.log(dogQuote.length);

console.log(dogQuote.toUpperCase());

//Objects reminder

var dogHouse = {
  location: "backyard",
  heightInFeet: 2,
  colorOfPaint: 'red'
};

//to add something to the object:
dogHouse.widthInFeet = 6;
dogHouse.doesItHaveADoor = false;

String.prototype.whatAreYou = function() {
  console.log('I am a striiiiiing! :-)');
};

var song = "Sprout Wings And Fly";

song.whatAreYou();

// Consider an electric drill. It can use different drill bits. It can be charging, idling,
// or in use. When in use it can be rotating clockwise or counter-clockwise.
// What would this object's prototype look like? What properties/methods would it have?
//
function electricDrill(drillBit, usageIn, rotationIn, torqueIn, weight) {
  this.drillBit = drillBit;
  this.currentUsage = usageIn;
  this.usage = function () {
    if(this.currentUsage === "charging"){
      return "Drill is currently charging.";
    } else if(this.currentUsage === "idling") {
      return "Drill is currently idling.";
    } else if (this.currentUsage === "in use") {
      return "Drill must be in use.";
    } else {
      return "Not sure about that usage.";
    }
  };
  this.rotating = rotationIn;
  this.whichDirectionRotating = function() {
    if (this.rotating === "clockwise"){
      return "clockwise";
    } else if (this.rotating === "counter-clockwise"){
      return "counter-clockwise";
    } else {
      return "Drills only rotate clockwise or counter-clockwise.";
    }
  };
  this.torque = torqueIn;
  this.torqueSetting = function() {
    if (this.torque === 1) {
      return "1";
    } else if (this.torque === 2) {
      return "2";
    } else if (this.torque === 3) {
      return "3";
    } else {
      return "There are only 3 torque settings for this drill.";
    }
  };
  this.weight = weight;
}

var myDrill = new electricDrill ("phillips", "idling", "counter-clockwise", 2, "3.6 pounds");

console.log(myDrill.drillBit, myDrill.currentUsage, myDrill.rotating, myDrill.torque, myDrill.weight);



function Dog (breed) {
    this.breed = breed;
}

// add the sayHello method to the Dog class
// so all dogs now can say hello
Dog.prototype.sayHello = function(){
    this.breed = breed;
    console.log("Hello, this is a " + this.breed + " dog");
};


var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();
