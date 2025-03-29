// Exercice 1
// Questin 1
function calculateSum(a, b) {
    return a + b;
}
let a = 5;
let b = 7;
let somme = calculateSum(a, b);
console.log("Le resultat est:",somme);

// Question 2
function calculateAverage([a, b, c]) {
    return console.log((a + b + c)/3)
}
console.log(calculateAverage([1, 2, 3]));

// Question 3
function convertToUpperCase(hello) {
    return hello.toUpperCase();
}
console.log(convertToUpperCase("hello word"));

// Exercice 2
// Question 1
function calculateRectangleArea(longueur, largeur) {
    return longueur * largeur;
}
let longueur = ("Entrez la longueur du rectangle :");
let largeur = ("Entrez la largeur du rectangle :");

console.log("L'aire du rectangle est:" + calculateRectangleArea(longueur, largeur));

// Question 2
function isEven(nombre) {
    return nombre % 2 == 0;
}
let nombre = ("Entrez le nombre:");
console.log(isEven(nombre));

// Question 3
function findElement(tableau, element) {
    return tableau.includes(element);
}
console.log(findElement([10, 27, 59, 60], 3));

// for(let i=0; i<tableau.lenght; i++) {
//     if(element==tableau[i]) {
//         return true ;
//     }
// } return false
// const tableau = [50, 56, 12, 78];
// console.log(findElement(tableau, element));

// Exercice 3
// Question 1
function fibonacci(n) {
    if (n <= 0) {
        return "n doit être un entier positif";
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));

// Question 2
function factorial(n) {
    if (n < 0) {
        return "n doit être un entier positif";
    } else if (n === 0 || n === 1) {
        return 1; 
    }
    return n * factorial(n - 1);
}

console.log(factorial(9)); 