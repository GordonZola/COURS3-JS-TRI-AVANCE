// TP Ecercice 1
// function send()
// {
//     var convert = document.querySelector("#KMS").value;
//     var miles = convert * 0.621371;
//     document.querySelector("p").textContent = (`${convert} Kms = ${miles} miles`);
// }



// TP Exercice 2
// function send(){
//     var intHeures = document.querySelector("#heures").value;
//     var intSalaire = document.querySelector("#salaire").value;
//     var intHeuressupp = 0;
//     var intTotal = 0;

//     if (intHeures >= 35)
//      {
//          var intHeuressupp = ((intHeures - 35) * intSalaire) * 1.5;
//          intTotal = (35 * intSalaire) + intHeuressupp;
//          alert(intHeuressupp);
//     }
//     else
//     {
//         intTotal = intHeures * intSalaire;
//     }
//     alert(`Votre salaire prohibitif est de ${intTotal}`);
// }



// TP Exercice 3

// function send() 
// {
//     var exces = document.querySelector("#exces").value;
//     var points = 0;
//     var amende = 0;

//     if (exces <= 20) 
//     {
//         var vitesse = Number(prompt('Quelle est votre exces?'));
//             if (vitesse <= 50)
//             {
//                 amende = 135;
//                 points = 1;
//             }
//             else
//             {
//                 amende = 68;
//                 points = 1;
//             }
//     }
//     else if (exces >= 20 && exces < 30)
//     {
//         amende = 135;
//         points = 2;
//     }
//     else if (exces >= 30 && exces < 40)
//     {
//         amende = 135;
//         points = 3;
//     }
//     else if (exces >= 40 && exces <50)
//     {
//         amende = 135;
//         points = 4;
//     }
//     else if (exces >= 50)
//     {
//         amende = 1500;
//         points = 6;
//     }
    
//     if (points > 2) 
//     {
//         document.querySelector('p').textContent = 
//         (`L'amende sera de ${amende} ainsi que de ${points} de 
//         retirés et une suspension de permis de 3 ans.`);
//     }
//     else
//     {
//         document.querySelector('p').textContent =
//         (`L'amende sera de ${amende} ainsi que de ${points} de 
//         retirés`);
//     }
// }



