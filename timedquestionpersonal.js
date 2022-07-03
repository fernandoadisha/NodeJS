//this is personal question that will be done by me to polsih my NodeJS knowledge so far.
//in this question I am making a timed msq quesion set which at the end can see the result

//changing the question type for now, because mcq seems little harder, so will choosing direct answers and checking if they are right method

//question ansking and answering is completed now have to add the timers


//making the quesion set (start with 2 questions)
const  qtime = 10000; //10 seconds
let cans = 0; //correct answers

//array which contain the questions
const questions = [
    "What is the tallest bulding in the world?",
    "Who is the CEO of SpaceX?"
];

//array which contain the answers
const answers = [
    "Burj Khalifa",
    "Elon Musk"
];

//array to contain user's answers
let uanswers = [];

//making function to ask questions
const askqs = (i=0) => {
    process.stdout.write(`\n${questions[i]}  `);
}

askqs();

//testing if this is the correct way to get the answers
process.stdin.on("data", dada => {
    uanswers.push(dada.toString().trim());
    if(uanswers.length<questions.length) {
        askqs(uanswers.length)
    }
    else {
        correction();
    }
});

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

const inoneq = () => { //in one question
    console.log("Your question is timed");
}
