
let khalilAge = 23;
let marquisAge = 22;
let yearGoal = 44;
let success = true;
let failed = false;
let animal = true;
let human = false;
let treeType = "plant";
let flowerType = "plant";
let antType = "bug";
let emailMinimumLength = 4;
const BRAIN_DEVELOPED = 25;

function t(ternaryOperation){
    console.log(ternaryOperation);
}



//ternary practice
t((success || success) ? "there's no other option." : "there is no other option.");
t((failed || failed) ? "this option has been patched" : "this option has been patched");
t((marquisAge <= yearGoal) ? "You still have plenty of time" : "You might want to hurry up my boy... :(");
t((success || failed) ? "this will always be true" : "this will always be false");
t((marquisAge >= 44) ? "You're getting old around this time" : "You're still pretty young");
t((khalilAge > marquisAge) ? "khalil still the lil bro" : "khalil still the lil bro");
t((yearGoal > BRAIN_DEVELOPED) ? "The brain will be developed no excuses" : "bruh...?");
t((failed !== success) ? "hmm....that sounds about right" : "bruh........huh?");
t((antType === "bug") ? "The ants type is correct" : "the ants type needs to be bug");
t((flowerType === "plant") ? "The flowers type is indeed plant" : "The flowers type needs to be plant");
t((emailMinimumLength > prompt("whats your email?: ") ? alert("This is a valid email.") : alert("This isn't a valid email")));
((prompt("whats is your zodiac sign?: ") === "Aquarius") ? alert("Valid"): alert("Not Valid"));

//keyword/function-name/parameters
//parenthesis have zero or more parameters
function functionExample(parameters){
    //function body which contains code
    //that function runs when code is
    //invoked.
}

function sayHello(greeting, name){
    console.log(`${greeting} ${name}`);
}
