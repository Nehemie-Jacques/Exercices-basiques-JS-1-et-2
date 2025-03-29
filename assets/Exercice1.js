// Exercices 7
let nom = prompt("veuillez entrer votre nom:");
alert("bienvenu " + nom + "!")
console.log("bienvenu " + nom +  " !")

// Exercice 6
let participants = ["Junior", "Tony", "Ange", "Manuella"];
participants.push("Robert");
console.log("La liste des participants:", participants);

//  Exercice 5
let Nom = "Dupont";
let age = 33; 
let inscriptionpayee = false;

console.log("Type de nom est:", typeof Nom);
console.log("Type de l'age est:", typeof age);
console.log("Type de inscriptionpayee:", typeof inscriptionpayee);

// Exercice 4 
let x = Number(prompt("Premiere note:"));
let y = Number(prompt("Deuxieme note:"));
let z = Number(prompt("Troisieme note:"));
let moyenne = (x + y + z) / 3;
console.log("La moyenne des notes est:", moyenne);

// Exercice 3
let ageutilisateur = 15;
function reduction(age) {
    if (ageutilisateur < 18) {
        console.log("Vous etes eligible pour la reduction");
    }
    else {
        console.log("Vous n'etes pas eligible pour la reduction");
    }
}
reduction(ageutilisateur);

// Exercice 2
let coutParParticipant = 2500;
let nombreDeParticipant = 5; 
function couttotal (coutParParticipant, nombreDeParticipant) {
    return coutParParticipant * nombreDeParticipant;
}
console.log("Le coût total des inscriptions est de " + couttotal + "FCFA.");

// Exercice 1
let nomUtilisateur = prompt("Veuillez entrez votre nom :");
const ageUtilisateur = prompt("Veuillez entrez votre âge :");
console.log(`Bienvenue, ${nomUtilisateur} ! Vous avez ${ageUtilisateur} ans.`);