/*
// EXERCICE 1 //

var stringName="Yoann"; //Définition de la variable contenant le nom//
var intAge=30;
var bool=true;

alert(stringName "\n" intAge "\n" bool); //Affichage des variables définies//



 
// EXERCICE 2 //

var stringName = prompt("Entrez votre nom");
alert("votre nom est "+ stringName);




// EXERCICE 3 //


var stringName = prompt("Entrez votre nom");
var intAge = prompt("Entrez votre age");
alert("Ton nom est " + stringName + "et tu as " + intAge + "ans");




// EXERCICE 4 //

var intAge = prompt("Saisir votre age");
if (intAge>50)
{
    alert("Tu es vieux !");
}
else
{
    alert("Tu es jeune !");
}




// EXERCICE 5 //

var intNbre = prompt("Saisir un nombre");
if (intNbre>=0)
{
    alert("Positif !");
}
else
{
    alert("Négatif !");
}




// EXERCICE 6 //

var intNbre = prompt("Saisir un nombre");
if (intNbre>0)
{
    alert("Positif !");
}
else if (intNbre<0)
{
    alert("Négatif !");
}
else
{
    alert("Chiffre nul");
}




// EXERCICE 7 //

var intA = prompt("saisir un premier nombre");
var intB = prompt("saisir un second nombre");
var stringope = prompt("choisir un opérateur entre + - * ou /")

if (stringope == "+")
{
    alert(`Addition : ${intA} + ${intB} = ${Number(intA) + Number(intB)}`);
}
else if (stringope == "-")
{
    alert(`Addition : ${intA} - ${intB} = ${Number(intA) - Number(intB)}`);
}
else if (stringope == "*")
{
    alert(`Addition : ${intA} * ${intB} = ${Number(intA) * Number(intB)}`); 
}
else if
{
    alert(`Addition : ${intA} / ${intB} = ${Number(intA) / Number(intB)}`);
}
else
{
    alert('Opérateur non reconnu');
}





// EXERCICE 8 //

var intA = prompt("saisir un premier nombre");
var intB = prompt("saisir un second nombre");
var stringope = prompt("choisir un opérateur entre + - * ou /");

switch (stringope)
{
    case '+':
    alert(`Addition : ${intA} + ${intB} = ${Number(intA) + Number(intB)}`);
    break;

    case '-':
    alert(`Soustraction : ${intA} - ${intB} = ${Number(intA) - Number(intB)}`);
    break;

    case '*':
    alert(`Multiplication : ${intA} * ${intB} = ${Number(intA) * Number(intB)}`);
    break;

    case '/':
    alert(`Division : ${intA} / ${intB} = ${Number(intA) / Number(intB)}`);
    break;

    default:
    alert("Erreur, choisir un opérateur valide");
}





// EXERCICE 9 //

var intC=0;
do
{
    alert(intC);
    intC++;
}
while(intC<=3);





// EXERCICE 10 //

var intD=0;
while(intD<=9)
{
    alert(intD);
    intD++;
}





// EXERCICE 11 //

for (var intE=0;intE<=3;intE++)
{
    alert(intE);
}





// EXERCICE 12 , Do/While//

var intF = prompt("Saisir un chiffre");
var turn = 0;
do
{
    alert("boucle do/while " + turn);
    turn++;
}
while(turn <= intF);


// EXERCICE 12 , While//

var intG = prompt("Saisir un chiffre");
var turn = 0;

while(intG>=turn)
{
    alert("boucle while "+ turn);
    turn++;
}




// EXERCICE 12, For//

var intH=prompt("Saisir un chiffre");
for (turn=0; intH>=turn;turn++)
{
    alert("boucle for " + turn);
}




// EXERCICE 13//

function send()
{
    var intNumber = document.getElementById('number').value;
    alert("Ton nombre est " + intNumber);
}




// EXERCICE 14 //

function carre()
{ 
    var intCarre = document.getElementById('number2').value;
    alert("le carré de ton nombre est " + Number(intCarre) * Number(intCarre));
}





// EXERCICE 15 //

function formulaire()
{
    var stringName = document.getElementById('name').value;
    var stringFirstName = document.getElementById('firstName').value;
    var intAge = document.getElementById('age').value;

    if (intAge>50)
    {
        var stringAge = "Tu es vieux !";
    }
    else
    {
        var stringAge = "Tu es jeune !";
    }

    alert("Ton nom est " + stringName + ", ton prénom est " + stringFirstName + " et " + stringAge);
}





//Exercice 16 Récuperer une valeur dans un tableau

var myTable = new Array ("Bonjour" , "Rebonjour" , "ReReBonjour");
alert(myTable[1]);





//Exercice 17 Parcourir tableau puis afficher la position lorsque la valeur est 9

var myTable = new Array( 3 , 5 , 9 , 11 , 19);
for (var index = 0;index < myTable.lenght; index++) 
{
    if(myTable[index] == 9)
    {
        alert(`Le chiffre 9 a été trouvé en position ${index}`);
    }
}




//Exercice 18 Tableau avec les jours de la semaine, parcourir puis afficher chaque jour avec un message diff

var myTable = new Array ("Lundi" , "Mardi" , "Mercredi" , "Jeudi" , "Vendredi" , "Samedi" , "Dimanche")

    myTable.forEach(Jours => 
    {
      switch (Jours)
      {
        case "Lundi":
        alert("Le Lundi c'est quand même bien mignon")
        break;

        case "Mardi":
        alert("Le Mardi c'est cool aussi")
        break;

        case "Mercredi":
        alert("Le Mercredi c'est tolérable")
        break;

        case "Jeudi":
        alert("Le Jeudi c'est naze")
        break;

        case "Vendredi":
        alert("Le Vendredi tout est permis")
        break;

        case "Samedi":
        alert("Le Samedi c'est l'ennui")
        break;

        case "Dimanche":
        alert("Le Dimanche c'est détente")
        break;
        }      
    });




//Exercice 19

//Demander la taille du tableau//
var Size = prompt("Donnez la taille du tableau")

//Création du tableau
var myTable = new Array(Number(Size));

//Demander les valeurs
for (let index = 0; index < myTable.length; index++)
{
    myTable[index] = prompt(`Donnez la valeur ${index} du tableau`)
}
for (let index = 0; index < myTable.length; index++)
{
    alert(`Ligne : ${index} | Valeur : ${myTable[index]}`)
};




//Exercice 20

var table = new Array(1, 3, 5);
var flag = false;

for (var index = 0; index < table.length;index++)
{
    if(table[index] == 5) {
        flag=true;
    }
}
if (flag) {
    alert("gg!");
} else {
    alert("Je n'ai pas trouvé")
}





//Exercice 21

var size = prompt("Donnez la taille du tableau");
var table = new Array(Number(size));

    for (let index = 0; index < table.length; index++)
        {
            table[index] = prompt(`Donnez la valeur ${index} du tableau`)
        };
    for (let index = 0; index < table.length; index++)
        {
            alert(`Ligne : ${index} | Valeur : ${table[index]}`)
        };

var intMax = Number(table[0]);
    for (var index=0; index < table.length; index++)
        {
            if(table[index] > Number(intMax))
            {
                intMax = table[index];
            }
        };
alert(`La valeur la plus grande du tableau est ${intMax}`);




//Exercice 22

var size = prompt("Donnez la taille du tableau");
var table = new Array(Number(size));

    for (let index = 0; index < table.length; index++) {
            table[index] = prompt(`Donnez la valeur ${index} du tableau`);
        };

    for (let index = 0; index < table.length; index++) {
            alert(`Ligne : ${index} | Valeur : ${table[index]}`);
        };

var intMin = Number(table[0]);
var intMax = Number(table[0]);

for (var index=0; index < table.length; index++) 
{
    if (table[index] > Number(intMax)) 
    {
        intMax = table[index];
    }

    if (table[index] < Number(intMin)) 
    {
        intMin = table[index];
    }
};

    alert(`La valeur la plus haute du tableau est ${intMax}`);
    alert(`La valeur la plus basse du tableau est ${intMin}`);





//Exercice 23

var number = prompt("Entrez un chiffre");
var table = new Array(1 ,2, 3, 4, 5, 6, 7, 8, 9, 10);
var count = 0;

for (var index = 0; index < table.length; index++) 
{
    if (table[index] > number) 
    {
        count++;
    }
}
    
alert(`il y a ${count} chiffre(s) dans le tableau qui sont plus grands`);





//Exercice 24

var number = prompt("Entrez un chiffre");
var table = new Array(1 ,24, 13, 94, 51, 6, 17, 87, 97, 101, 4, 541, 35, 99, 12554, 120, 100, 3, 1, 98, 71);
var count = 0;
var grand = "";

for (var index = 0; index < table.length; index++) 
{
    if (table[index] > number) 
    {
        count ++;
        grand += `${table[index]} | `;
    }
}
alert(`il y a ${count} chiffre(s) plus grand que le votre dans le tableau. \n Il s'agit des nombres : ${grand}`);



// EXEMPLE Tri par insertion ordre croissant//

var myTable = new Array(3,4,9,52,41,6,15,26,44,99);                                     // définition d'un tableau //
var min = 0;                                                                            // variables minimum //
var tempo = 0;                                                                          // variable tampon //

for (var index=0; index < myTable.length; index++)                                      // index est à 0, tant que index est plus petit que la longueur du tableau on fait ce qu'il y a en dessous et on ajoute 1 à index //
{
    min = index;                                                                        // la variable minimum prend la valeur 0 //

    for (var indexMoreOne = index + 1; indexMoreOne < myTable.length; indexMoreOne++)   // indexMoreOne vaut index + 1 soit 1, tant que indexMoreOne est plus petit que la longueur du tableau on fait ce qu'il y a en dessous et on ajoute 1 à indexMoreOne//
    {
        if (myTable[indexMoreOne] < myTable[min])                                       // si la case numéro 1 du tableau est plus petite que la case 0 alors //
        {
            min = indexMoreOne;                                                         // la variable min prend la valeur de la case 1 sinon rien ne se passe jusqu'à la fin de la boucle//
        }
    }

    if (min != index)                                                                   // Puis si la variable min est différent de index //              
    {
        tempo = myTable[index];                                                         // la variable tempo devient la valeur de index du tableau //
        myTable[index] = myTable[min];                                                  // myTable[index] prend la valeur de myTable[min] //
        myTable[min] = tempo;                                                           // myTable[index] prend la valeur de la variable tempo //
    }
}
alert(myTable);                                                                         // le navigateur affiche le tableau //




// EXEMPLE TRI A BULLES -> ici on compare des nombres situés cote à cote //

var myTable = new Array(3,4,9,52,41,6,15,26,44,99);                                     // définition d'un tableau //
var tempo = 0;                                                                          // variable tampon //

for (var index=0; index < myTable.length; index++)                                      // index est à 0, tant que index est plus petit que la longueur du tableau on fait ce qu'il y a en dessous et on ajoute 1 à index //
{
    for (var indexMoreOne = index + 1; indexMoreOne < myTable.length; indexMoreOne++)   // indexMoreOne vaut index + 1 soit 1, tant que indexMoreOne est plus petit que la longueur du tableau on fait ce qu'il y a en dessous et on ajoute 1 à indexMoreOne//
    {
        if (myTable[index] > myTable[indexMoreOne])
        {
            tempo = myTable[index];                                                   // la variable tempo devient la valeur de index du tableau //
            myTable[index] = myTable[indexMoreOne];                                   // myTable[index] prend la valeur de myTable[indexMoreOne] //
            myTable[indexMoreOne] = tempo;                                            // myTable[indexMoreOne] prend la valeur de la variable tempo //
        }
    }   
}
alert(myTable);                                                                         // le navigateur affiche le tableau //



//Exercice 25
var table = [10,8,91,54,1,6,97,33,37,100];
var temp = 0;

for (index=0; index < table.length; index++)
{
    for (var indexMoreOne = index + 1; indexMoreOne < table.length; indexMoreOne++)
    {
        if (table[index] < table[indexMoreOne])
        {
            temp = table[index];
            table[index] = table[indexMoreOne];
            table[indexMoreOne] = temp;
        }
    }
}
alert(table);



// Exercice 26
var table = [80,40,1,23,12,44,20,21,98,74];
var temp = 0;

alert(table);

for (index = 0; index < table.length; index++)
{
    for (var indexMoreOne = index + 1; indexMoreOne < table.length; indexMoreOne++)
    {
        if (table[index] > table[indexMoreOne])
        {
            temp = table[index];
            table[index] = table[indexMoreOne];
            table[indexMoreOne] = temp;
        }
    }
}
alert(table);



//Exercice 27
var table = [1,85,4,65,32,14,25,98,71,100]
var temp = 0;
var min = 0;
var result = '';

for (index = 0; index < table.length; index++)
{
    min = index;

    for (var indexMoreOne = index + 1; indexMoreOne < table.length; indexMoreOne++)
    {
        if (table[indexMoreOne] > table[min])
        {
            min = indexMoreOne;
        }
    }

    if (min != index)
    {
        temp = table[index];
        table[index] = table[min];
        table[min] = temp;
    }
}

table.forEach(element => {
    result += ` ${element} |`
});

alert(result);



//Exercice 28
var table = [1,85,4,65,32,14,25,98,71,100]
var temp = 0;
var min = 0;
var first = '';
var result = '';

table.forEach(element => {
    first += ` ${element} |`
});

alert(first);

for (index = 0; index < table.length; index++)
{
    min = index;

    for (var indexMoreOne = index + 1; indexMoreOne < table.length; indexMoreOne++)
    {
        if (table[indexMoreOne] < table[min])
        {
            min = indexMoreOne;
        }
    }

    if (min != index)
    {
        temp = table[index];
        table[index] = table[min];
        table[min] = temp;
    }
}

table.forEach(element => {
    result += ` ${element} |`
});

alert(result);




//Exercice 29

var num = prompt('Saisissez un numéro');
var table = new Array (Number(num));
var temp = 0;
var min = 0;
var first ='';
var result = '';

for (var index = 0; index < table.length; index++)
{
    table[index] = (Number(prompt('Saisir un Chiffre')));
    first += ` Ligne : ${[index]} | Valeur : ${table[index]} | \n`;
}

alert(first);
*/