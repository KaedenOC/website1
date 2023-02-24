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
    }   else {
        console.log ("I do not recognise this input.");
        // userChoice();
    }
}
userChoice();

function userCats(){
    let catPics = prompt("Quick Question.. How many cats do you have? Pick a number between 0 and 100!");
    console.log ("user has " + catPics + "cats");
    // if (catPics >= 100){
    // alert("Thats not a number between 0 and 100 silly!");
    // }
}
    for (i = 0; i <= "100"; i++){
    show_image("https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 50, 50,"usercats");
    userCats();
}
    console.log ("user has" + catPics + "cats");

function show_image(src, width, height, alt){
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}
show_image();


















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