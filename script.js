console.log("hello World");

//Variáveis
let n1= parseFloat (prompt ("Digite seu numero")); //Número 1
let n2 =parseFloat (prompt  ("Digite o segundo numero")); //Número2
let text = ""; // variável texto 
let i = 0; //variável indicativa  


//Funções
 function verificarPar (n1){    //Função 1
    if (n1 % 2 === 0){ 
          console.log(n1 + "é igual a par.");
 
     } else {
         console.log(numero + "é igual a impar."); 
     }
  }
 function calcular(n1,n2) {    //função 2
    const  soma = n1+n2;
    const subtracao = n1-n2;
    const multiplicacao = n1 * n2;
    

    console.log("A soma é" + soma);
    console.log("A subtração é " + subtracao);
    console.log("A multiplicação é " + multiplicacao);
    if  (n2 === 0 ) {
        console.log ("Naõ da pra dividir por zero");

    } else {
        const divisao = n1 / n2;
        console.log("A divisão é " + divisao); 
    }
   }

   do{
    text += "<br> Contando..." + i;
    i++;
   }
   while (i < 10);


  
   

   //chamar função 
 verificarPar(n1);
 calcular(n1,n2);
 