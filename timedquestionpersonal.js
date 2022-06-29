//this is personal question that will be done by me to polsih my NodeJS knowledge so far.
//in this question I am making a timed msq quesion set which at the end can see the result

//changing the question type for now, because mcq seems little harder, so will choosing direct answers and checking if they are right method


//making the quesion set (start with 2 questions)
const  qtime = 10000; //10 seconds

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
    console.log(questions[i]);
}

for(let j=0;j<questions.length;j++) {
    askqs(j);

    //testing if this is the correct way to get the answers
    process.stdin.on("data", dada => {
        console.log(`${dada.toString().trim()}`);
    });
}