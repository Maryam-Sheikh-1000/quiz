#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.neon("welcome to our Project:");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
async function AskQuestion() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "question1",
            message: "What is the capital of France?",
            choices: ["Paris", "London", "New York"],
        },
        {
            type: "list",
            name: "question2",
            message: "What is the largest planet in our solar system?",
            choices: ["Earth", "Mars", "Jupitar"],
        },
        {
            type: "list",
            name: "question3",
            message: "What is the currency of Japan?",
            choices: ["Yen", "Dollar", "Euro"],
        }
    ]);
    const pass = 30;
    const fail = 0;
    if (answers.question1 === "Paris") {
        console.log("Your Answer is Right: ");
    }
    else
        () => {
            console.log("Your Answer is Wrong,");
        };
    if (answers.question2 === "Jupitar") {
        console.log("Your Answer is Right: ");
    }
    else {
        console.log("Your Answer is Wrong,");
    }
    if (answers.question3 === "Yen") {
        console.log("Your Answer is Right: ");
    }
    else {
        console.log("Your Answer is Wrong,");
    }
}
AskQuestion();
