//this is personal question that will be done by me to polsih my NodeJS knowledge so far.
//in this question I am making a timed msq quesion set which at the end can see the result

//changing the question type for now, because mcq seems little harder, so will choosing direct answers and checking if they are right method

//question ansking and answering is completed now have to add the timers


//making the quesion set (start with 2 questions)
let cans = 0; //correct answers

//array which contain the questions
const questions = [
    "What is the tallest bulding in the world?",
    "Who is the CEO of SpaceX?",
    "What AWS stands for?"
];

//array which contain the answers
const answers = [
    "Burj Khalifa",
    "Elon Musk",
    "Amazon Web Services"
];

//function of the correction
const correction = () => {
    for(j=0;j<answers.length;j++) {
        if(answers[j]==uanswers[j]){
            cans++;
        }
    }
    console.log(`\nYou got ${cans}/${questions.length} correct\n`);

    let mrkperc = cans/questions.length*100;
    if(mrkperc!=0){
        console.log(`Congrats! You scored ${mrkperc}% marks`);
    }
    else{
        console.log(`Sorry! You scored ${mrkperc}% marks`);
    }
    process.exit();
}


//timing section

const  qtime = 10000; //10 seconds, question time
//const wtime = 20100; //20 seconds, whole time
let curtime = 0; //current time
let qtimefunc; //varible to hold the timeout

//function to show how much time is left (not in the use for now)
const showlefttime = () => {
    //since in command line having only last line to interact I haave to pause live time showing for now
    curtime += 1000;
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`You have ${curtime/1000} seconds left`);
}

//function that runs after running out of time
const inoneq = () => { //in one question
    console.log("Time ran out for this question");
    uanswers.push("Time ran out");
    askqs(uanswers.length);
}

//array to contain user's answers
let uanswers = [];

//setInterval(correction, wtime); //for now setting interval is not being used because every question is given 10s and if there's no more questions then correction() function will run, ending the program

//making function to ask questions
const askqs = (i=0) => {
    if(questions[i]==undefined){
        correction();
    }
    else{
        process.stdout.write(`\n${questions[i]}  `);
        qtimefunc  = setTimeout(inoneq, qtime);
    } 
}

askqs();

process.stdin.on("data", dada => {
    uanswers.push(dada.toString().trim());
    clearTimeout(qtimefunc);
    if(uanswers.length<questions.length) {
        askqs(uanswers.length)
    }
    else {
        correction();
    }
});