//standard input and output are another feature on the process object, so we can impiment these with out code when we needed
//process.stdin // for now only using standard output


process.stdout.write("Hello ");
process.stdout.write("World \n");

//different between the "process.stdout.write" and "console.log" is "console.log" always add a line break at the end (like the different between print and println)

//to get some question we need we create an array which contains the quesitionss

//creating array, of course inside [] marks
const question = [
    "What's you name?",
    "What's your favourite programming language?",
    "Where would you like to go?"
];

//creating a function?
const ask = (i=0) => {
    process.stdout.write(`\n${question[i]}`); //template string that shows the quesion because need to put it with a "\n"
    process.stdout.write(">");
};

ask();

//creating an array to have the answers
const answers = [];

//creating input method using "stdin"
process.stdin.on("data", doil => { //use the "stdin" to get data, "on" keyword to lsiten for events, and event name is "data"
    //process.stdout.write(`\n ${doil} \n`);//this one is the second argument of the "on" function is the handler, in here is one of our funcions

    answers.push(doil.toString().trim());//pushing answers to the answers array

    if(answers.length < question.length) {
        ask(answers.length);
    }
    else{
        process.exit(); //exiting the process, exiting code which is still running because of "on" function
    }
});
 process.on("exit", () =>{

    //now that the values are already in the array we can give names to array items in giving names inside squre brackets("[]") and assigning array name to it
    const[name, lang, place] = answers;

    //template string is cable of allowing white space means it can use to add code in mutiple lines
    console.log(` 
        Thank you for the answers

        ${name}, You can code ${lang} while travelling to ${place}!!!
    `);
 });
 