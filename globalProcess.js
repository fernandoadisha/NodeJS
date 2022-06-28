//every node files we create and available is called object

console.log(process.pid); //process is an object which can be accessed gloably 

//we can use several thing from the proccess object including communicate with the terminal (cmd)

console.log(process.versions.node); //asking for the version of the node from the process object 

console.log(process.argv); //output a string varible, which contain details of the words we write on terminal (this is possible because proccess object can communicate with the terminal)

const [, , Fname, Lname] = process.argv; //since this output is an array we can store those data in an array

console.log(`Your name is ${Fname} ${Lname}`); //when outputting a template string  with varibales we can use backtic(`) for string and $(variable_name) for varbles
//tamplate string is a string that allow us to put variables and expression into the string without concatnating

//using flag variables (a varible type that has one value until some conditions are true)

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1; //index start from 0
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting"); // flag variable is defined
const user  = grab("--user");
// when the --greeting is used on cmd and put a name after it it'll that name as varible to gretting variable
//same goes to user, when --user keyword(defined with the grab function) uses in cmd and put a value after that, it'll assign that value to user varible
//you can replace whatever keyword I want inside the grab function and value I put after that keyword will always assign to realted variable


console.log(`${greeting} ${user}`);