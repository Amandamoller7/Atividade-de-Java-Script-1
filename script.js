console.log("hello World");

//Variáveis
let n1= parseFloat (prompt ("Digite seu numero")); //Número 1
let n2 =parseFloat (prompt  ("Digite o segundo numero")); //Número2
//Funções
 function verificarPar (n1){    //Função 1
    if (n1 % 2 === 0){ 
          console.log(n1 + "é igual a par.");
 
     } else {
         console.log(numero + "é igual a impar."); 
     }
  }
 function calcular(n1,n2) {    //função n2
    let soma = n1+n2;
    let subtracao = n1-n2;
    let multiplicacao = n1 * n2;
    let divisao = n1 / n2;

    console.log("A soma é" + soma);
    console.log("A subtração é" + subtração);
    console.log("A multiplicação é" + mutiplicacao);
    console.log("A divisão é" + divisao);


 }
 verificarPar(n1);
 calcular(n1,n2);
 