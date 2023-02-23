alert ("Welcome To My Website!");
let userChoice = prompt("Wish to see basket of cats or the cat bean? Please use the terms basket or bean");

if (userChoice == "basket"){
    document.write("basket of cats here")
} else if (userChoice == "bean"){
    document.write("see bean down below")
} else {
    document.write("please use the terms basket or bean")
}