//I mostly worked with Hannah on this project
var instructions = [
    {
        "id": 1,
        "choices": {
            "first": 2,
            "second": 3
        },
        "choiceText": "choose 1",
        "title": "The Adventure Begins",
        "description": "This is where you setup your initial story",
        "ending": 0
    },
    {
        "id": 2,
        "choices": {
            "first": 4,
            "second": 5
        },
        "choiceText": "Go Left",
        "title": "The long hallway",
        "description": "You see a door at the end, but you also suspect there may be a secret door",
        "ending": 0
    },
    {
        "id": 3,
        "choices": {
            "first": 6,
            "second": 7
        },
        "choiceText": "Go Right",
        "title": "The hungry beast",
        "description": "This is probably not going to end well.",
        "ending": 0
    },
    {
        "id": 4,
        "choices": {
            "first": 0,
            "second": 0
        },
        "choiceText": "Use door at end the end of the hall",
        "title": "The Garden",
        "description": "This is looking better.",
        "ending": 1

    },
    {
        "id": 5,
        "choices": {
            "first": 0,
            "second": 0
        },
        "choiceText": "Look for Secret Passage",
        "title": "The Dungeon",
        "description": "This is looking worse.",
        "ending": -1

    },
    {
        "id": 6,
        "choices": {
            "first": 0,
            "second": 0
        },
        "choiceText": "Run Away",
        "title": "Chomp Chomp",
        "description": "Yummmmmmm",
        "ending": -1

    },
    {
        "id": 7,
        "choices": {
            "first": 0,
            "second": 0
        },
        "choiceText": "Fight the Beast",
        "title": "Glorious Battle",
        "description": "You defeat the beast",
        "ending": -1

    }];


//updates the screen to show the current description and choices
//requires the id of the new set of instructions
nextStep(1);
function nextStep(id) {
    //first we need to get the new item from the list of instructions
    var instruction = getItem(instructions, id);

    //then we need to update the screen with the main description
    updateElement('title', instruction.title);
    updateElement('description', instruction.description);

    //then get the items for choice1 and 2 from the list
    var choice1 = getItem(instructions, instruction.choices.first);
    var choice2 = getItem(instructions, instruction.choices.second);

    //check to see if they are endpoints

    //if endpoints then end the game
    if(instruction.ending === -1){
        sadDay();
    }
    else if(instruction.ending === 1){
        happyDay();
    }

    //if not update those sections on the screen with the choiceText
    updateElement('choiceOne', choice1.choiceText);
    updateElement('choiceTwo', choice2.choiceText);
    updateButton('buttonOne', choice1.id);
    updateButton('buttonTwo', choice2.id);

}

//1. create the getItem, updateElement, and updateButton functions

//getItem: gets an item from a list by id
//requires the list and id of the desired element
function getItem(instructions, id){
    for(var i = 0; i < instructions.length; i++){
        if (id === instructions[i].id){
            return instructions[i];
        }
    }
}
//updateElement: updates the contents of an element on the screen
//requires the id of the div to update, and the new contents.
function updateElement(title, instruction){
    document.getElementById(title).innerHTML = instruction;
}
//updateButton: sets the onclick event for a button with the id of the item it chooses
function updateButton(button, choice) {
   document.getElementById(button).setAttribute("onclick", "nextStep(" + choice + ")");
}
//2. then create and use a function to initialize the game to step 1
function resetGame(id){
    nextStep(id);
    document.getElementById('buttonOne').disabled = false;
    document.getElementById('buttonTwo').disabled = false;
    document.getElementById('gameEnd').innerHTML = "";
}
//3. other needed functions
//restart: resets the game back to the beginning.

//happy ending: does whatever we want it to do when they end in a good place
function happyDay(){
    document.getElementById('gameEnd').innerHTML = "You Won! You live to adventure another day!";
    document.getElementById('buttonOne').disabled = true;
    document.getElementById('buttonTwo').disabled = true;
}
//sad ending: does whatever we want it to do if they end at a bad place
function sadDay(){
    document.getElementById('gameEnd').innerHTML = "You Lose, sorry you died...";
    document.getElementById('buttonTwo').disabled = true;
    document.getElementById('buttonOne').disabled = true;
}
