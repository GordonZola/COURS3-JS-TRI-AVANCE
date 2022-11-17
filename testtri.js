/*
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



