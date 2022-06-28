//before we worked with node js asycrosouslt with event listers (process.on function)

//antoher way we can work asyncrosusly with is timing, which we use in here

const waitTime = 5000;
const waitInterval = 500; //0.5 seconds
let currentTime = 0; // "const" is for constant variables and when using "let" it can be changed 

console.log(`setting a ${waitTime/1000} second wait timer`);

const IncTime = () => {
    currentTime += waitInterval;
    let p = Math.floor((currentTime/waitTime)*100);
    process.stdout.clearLine(); //function use to clear the last line in the terminal
    process.stdout.cursorTo(0); //this funciton will get the cursor to the staring position
    process.stdout.write(`waiting... ${p}%`);

    //console.log(`waiting ${currentTime/1000} seconds`);
}

//const timerFinished = () => console.log("Ended!"); //aparently this is a function with no parameters in case if needed parameters we can add it inside the brackets(little different than the regualar funtions but mostly similar)
//also reason this function doesn't have a curley brackets "{}" is it's only contain 1 line so no need of curley brackets, but of course if needed we can use them

//above one line function has been commented to keep the knowledge of it, but now recreating that function to have multiple lines
const timerFinished = () => {
    clearInterval(interval);

    //clear the last percentage and say ended
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("Ended!");
}


//setting this function to a varible so we can use it's return values which the current time(I guess because there's nothing we actually return)
const interval = setInterval(IncTime, waitInterval); //function that set intervals means, this function call the given function in this casse "IncTime" over and over again after waiting the given time, just like the setTimeout function  this takes the needed funciton as the first parameter and waiting time as the second parameter 
setTimeout(timerFinished, waitTime); //function which set the timer, in the first parameter we add the fucntion which need to run after the timer is ran out and second we will add the timer time

