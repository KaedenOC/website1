function greeting(){
    let userName = prompt("Enter Your Name Please");
    console.log(userName);
    document.getElementById("welcome").textContent = "Welcome, " + userName;
    return userName;
}
greeting();

function userChoice(){
    let pageChoice = prompt("Would you like to see cats in a basket or the cat bean? Type basket, bean, or skip.");
    console.log(pageChoice);
    if(pageChoice == "basket"){
        let basketText = document.getElementById("basket1");
        basketText.textContent = 'Here Are Cats In A Basket';
        console.log("basket");
    } else if(pageChoice == "bean"){
        let basketText = document.getElementById("beantext");
        basketText.textContent ="Here Is The Cat Bean.";
        console.log("bean");
    } else if(pageChoice == "skip"){
        document.write("Enjoy the Site.");
        console.log("skip");
    }  else {
        console.log ("I do not recognise this input.");
        userChoice();
    }
}
userChoice();

















// function pageChoiceBasket(){
//     if(pageChoice == "basket"){
//     document.write("Here Are Cats In A Basket");
// }}
// pageChoiceBasket();

// function pageChoiceBean(){
//     if(pageChoice == "bean"){
//     document.write("Here Is The Cat Bean.");
// }}
// pageChoiceBean();

// function pageChoiceSkip(){
//     if(pageChoice == "skip"){
//     let pageChoiceSkip = prompt("OK Enjoy The Site!")
// }}
// pageChoiceSkip();










// anatomy of a function

// function declaration/function definition
//function functionName(parameters){code to execute;}
// function addTwoNumbers(num1, num2){
    // let num1 = 5;
    // let num2 = 10;
//     let sum = num1 + num2;
//     console.log (sum);
//     return sum;
// }
// let firstName = ("Kaeden");
// let lastName = ("O")
// addTwoNumbers(5, 10);   //<--- calling the function
// addTwoNumbers(10, 100);
// addTwoNumbers("hello", "World");
// addTwoNumbers(5, "ninety");
// addTwoNumbers(firstName, lastName);

// function expressions
// let newFunction = function(){}
// console.log ("new function");
// newFunction(){}