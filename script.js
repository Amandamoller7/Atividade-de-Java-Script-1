console.log("hello World");


//Funções;
//Função 1;
/*
let n1= parseFloat (prompt ("Digite seu numero")); //Número 1;

 function verificarPar (n1){  
    if (n1 % 2 === 0){ 
          console.log(n1 + "é igual a par.");
 
     } else {
         console.log(n1 + "é igual a impar."); 
     }
  }
  */
 /*
//função 2;
let n1= parseFloat (prompt ("Digite seu numero")); //Número 1;
let n2 =parseFloat (prompt  ("Digite o segundo numero")); //Número2;
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
//Atividade 3;
 /*
 let n = 10 //I é uma contadora, neste caso o valor dela é 10;
    while (n >= 1)
     {            //enquanto, condição ( contadora for maior que 1)  
        do  {
        console. log ("contando..." + n);   //contando o número, (contando 1, contando 2)
        n--;   // O numero vai diminuindo 
        } while (n >= 0); 
    }
    */

//Atividade 4;
   /* 
   let palavra = prompt ("Digite uma palavra");//guardar as palavras;
   //  function inverterTexto (palavra) {
        return palavra.split ('').reverse().join('');  
    }
    */
//Atividade 5 ;
 // variável para contar caracteres 
 /*
let palavra = prompt ("digite uma palavra")//variável paara guardar palavra
  function contartexto(palavra){
   let nletras=palavra.length   // variável para contar caracteres                          //usando uma "palavra-chave" que conta strings;
    console.log (nletras);
  }
    */

//Atividade 6
 /*
const carro = {          //declarando um objeto.
    marca:'Volkswargen ',
    modelo:'Esmerald',                                   //preenchendo com os dados do novo fusca 2025
    ano :'2025'
    
};


console.log('O carro é da ' +carro.marca + ' Modelo '+ carro.modelo + ' lançado no ano '+ carro.ano)
 */

//Atividade 7;
/*
let mensagem= 'Olá!';
let nome =  prompt ("Qual é o seu nome?");
function mensagemPersonalizada(nome,mensagem ){
    console.log(mensagem + nome);



}
*/ 
// Atividade 8.
/*
let n1 =  parseFloat( prompt ("Digite um numero"));  
let n2 = parseFloat(prompt ("Digite o segundo numero"));
let n3 = parseFloat(prompt ("Digite o terceiro"));
                                    
 function mediatotal(n1, n2, n3){
    const media=((n1+n2+n3)/3)  //Criando uma variavel que vai somar todos os numeros e dividir  para criar uma média.
    console.log("A média é " + media);
 }
*/

// Atividade 9
let i = 21 // variável indicadora 
for (;i > 0;){   //para numero maior que zero 
    i--;    // Fechando o código
    if ( i%3 == 0) {           //se esse número for divisivel (igual a zero) então
        if (i === 0){              //se o número for 0 é igual, ele não pode ser divisivel por 3
            console.log(i + " Esse número não é multiplo de 3");     
        }else{                       // caso o número não seja zero
            console.log( i + " Esse número aqui é múltiplo por 3");
        }
    } else {
    console.log (i + " Esse número não é multiplo por 3" );     //caso o número não seja divisivel por 3
}
} 



//chamar função 
 //verificarPar(n1); 
 //calcular(n1,n2);
 //inverterTexto(palavra);
 //contartexto(palavra);
//mensagemPersonalizada(nome,mensagem);
//mediatotal(n1,n2,n3);
