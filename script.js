console.log("hello World");

//Variáveis
let n1= parseFloat (prompt ("Digite seu numero")); //Número 1;
let n2 =parseFloat (prompt  ("Digite o segundo numero")); //Número2;
let n = 10 //I é uma contadora, neste caso o valor dela é 10;
let palavra = prompt ("Digite uma palavra");//guardar as palavras;





//Funções
//Função 1
/*
 function verificarPar (n1){  
    if (n1 % 2 === 0){ 
          console.log(n1 + "é igual a par.");
 
     } else {
         console.log(n1 + "é igual a impar."); 
     }
  }
  */
 /*
//função 2
 function calcular(n1,n2) {   
    const  soma = n1+n2;
    const subtracao = n1-n2;
    const multiplicacao = n1 * n2;
    console.log("A soma é" + soma);
    console.log("A subtração é " + subtracao);
    console.log("A multiplicação é " + multiplicacao);
    if  (n2 === 0 ) {                                                   //Utilização de IF para caso o numero seja zero;
        console.log ("Não da pra dividir por zero");

    } else {
        const divisao = n1 / n2;
        console.log("A divisão é " + divisao); 
    }
   }
   */
//Atividade 3
 /*
    while (n >= 1)
     {            //enquanto, condição ( contadora for maior que 1)  
        do  {
        console. log ("contando..." + n);   //contando o número, (contando 1, contando 2)
        n--;   // O numero vai diminuindo 
        } while (n >= 0); 
    }
    */

//Atividade 4
    function inverterTexto (palavra) {
        return palavra.split ('').reverse().join('');  
    }
       
   
    
     
   

   



  
   

   //chamar função 
 //verificarPar(n1); 
 //calcular(n1,n2);
 inverterTexto