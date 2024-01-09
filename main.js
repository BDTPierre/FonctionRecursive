// On va creer une variable nombre fixe (nombre à deviner)
// Créer une deuxième variable qui demande un nombre à l'utilisateur
// On va faire une boucle while qui a pour condition: Tant que le nombre de l'utilisateur est different du nombre fixe, il doit executer la tache
// La boucle while sert a demander à l'utilisateur un nombre tant qu'il a pas trouver le nombre juste.
// Dans cette boucle while on va mettre des conditions: Trop haut, trop bas ou correct et quand il est correct, ca arrete la boucle while et il recoit un message de felicitation.

function play() { 
    
let Randomnumber = Math.floor(Math.random() * (101 - 0) + 0);
//console.log(numberfix);
let usernumber = window.parseInt(prompt("Bonjour, vous allez devoir deviner un nombre entre 1 et 100 en 5 tentatives, c'est parti !"));
//consol.log(usernumber);
let tentative = 1;

while (usernumber !== Randomnumber && tentative < 5){
    tentative ++
    if (usernumber > Randomnumber){
        alert("C'est moins, retentez votre chance !");
    } else {
        alert ("C'est plus, retentez votre chance !");
    }
    usernumber = window.parseInt(prompt("Entrez un nombre compris entre 1 et 100 :"));
    }
//console.log(essaie);
if (usernumber === Randomnumber) {
    alert ("Vous avez le bon nombre. Bravo vous l'avez trouvé en " + tentative + " tentative(s)");
} if (tentative >= 5) {
    alert("Vous avez perdu, le nombre qu'il fallait trouver est : " + Randomnumber);
    let infoplayer = window.confirm("Veux-tu rejouer ?")
    if(infoplayer === true){
        play ()
    } else {
        alert("Merci d'avoir joué !") 
    }
}
}

play ();






