/*
  - A partir deste exercício, você está livre para escolher os nomes das suas  
    variáveis e constantes!

  - Após resolver cada exercício, tente reescrever partes do seu código para  
    deixá-lo mais legível.
    
    Por exemplo, uma expressão typeof crazyArray[i] === 'boolean' pode ser  
    armazenada em uma constante "isItemABoolean".

    Falaremos mais sobre legibilidade na revisão destes exercícios =)
*/

/*
  01

  - Abaixo do array "fruits", verifique se "abacaxi" existe no array. Se  
    existir, exiba no console a mensagem "A string "abacaxi" existe no array  
    fruits.";
  - Se "abacaxi" não existir, verifique se "pera" existe no array. Se existir,  
    exiba no console a mensagem "A string "pera" existe no array fruits.";
  - Se nenhuma das duas frutas existirem no array, exiba no console a mensagem  
    "Nem pera nem abacaxi existem no array "fruits".".
*/
console.info('\n### Etapa 02 - Exercício: 01 ###\n ')

const fruits = ['morango', 'banana', 'mamão']

if (fruits.includes('abacaxi')) {
  console.log("A string 'abacaxi' existe no array  fruits.")
}else if(fruits.includes('pera')){
  console.log("A string 'pera' existe no array fruits.")
}else{
  console.log("Nem pera nem abacaxi existem no array 'fruits'.")
}

/*
  02

  - Armazene em uma constante apenas a hora atual na qual você está fazendo este  
    exercício. Ex.: 18;
  - À partir das 6, exiba "Bom dia!" no console;
  - À partir das 12, exiba "Boa tarde!";
  - À partir das 18, exiba "Boa noite!".

  Obs.: tanto a expressão do lado esquerdo quanto a do lado direito do operador  
  lógico precisam ter a constante especificada. Exemplo: hour > x && hour < y.
*/
console.info('\n### Etapa 02 - Exercício: 02 ###\n ')

const currentHour = 20.45
const isMorning = currentHour > 0 && currentHour < 12
const isAfternoon = currentHour >= 12 && currentHour <= 18
const isNight = currentHour > 18

if(isMorning){
  console.log('Bom dia!')
}else if(isAfternoon){
  console.log('Boa tarde!')
}else if(isNight){
  console.log('Boa noite!')
}

/*
  03

  - Armazene sua idade em uma constante;
  - Escreva uma estrutura condicional em que, se a idade é 7 anos ou menos, ou  
    se a idade é 65 anos ou mais, a frase "Para você, a entrada é grátis!" é  
    armazenada em uma variável;
  - Se a idade não atende às condições acima, a variável deve armazenar a  
    mensagem "A entrada é R$ 30,00.";
  - Exiba a mensagem no console;
  - Agora, teste diferentes idades para se certificar que a condição do `if`  
    também está funcionando.
*/

console.info('\n### Etapa 02 - Exercício: 03 ###\n ')

const myAge = 21
let priceMsg = null

const isChild = myAge <= 7
const isOlder = myAge >= 65

if(isChild || isOlder){
  priceMsg = "Para você, a entrada é grátis!"
  console.log(priceMsg)
}else{
  priceMsg = "A entrada é R$ 30,00."
  console.log(priceMsg)
}

/*
  04

  - Utilize um for loop para gerar um novo array com apenas os números entre  
    11 e 90 presentes no array "numbers" (incluindo 11 e 90);
  - Exiba o novo array no console;
  - O resultado deve ser: [34, 46, 90, 25, 11, 89, 76].
*/
console.info('\n### Etapa 02 - Exercício: 04 ###\n ')

const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76, 99]

let numbersBetween11And90 = []

for(let i = 0; i < numbers.length; i++){

  const selectedNumbers = numbers[i] >= 11 && numbers[i] <= 90

  if(selectedNumbers){
    numbersBetween11And90.push(numbers[i])
  }

}
console.log(numbersBetween11And90)


/*
  05

  - O array "crazyArray" (abaixo) possui 3 tipos de dados: numbers, booleans  
    e strings;
  - Considerando este array, substitua os "X" da frase abaixo pelas informações  
    corretas;
  - Gere essas informações à partir de um for loop;
  - Exiba a frase no console.

  "O crazyArray tem X booleans, X números e X strings."
*/
console.info('\n### Etapa 02 - Exercício: 05 ###\n ')

const crazyArray = [true, 869, 'oi', 71, false, 83, '35', true, 397, 'js', false]

let amountBooleanType = 0
let amountNumberType = 0
let amountStringType = 0

for(let i = 0; i < crazyArray.length; i++){

  const typeOfItem = typeof crazyArray[i]

  let isBoolean = typeOfItem === typeof Boolean()
  let isNumber = typeOfItem === typeof Number()
  let isString = typeOfItem === typeof String()

  if (isBoolean) {
    amountBooleanType += 1
  }else if(isNumber){
    amountNumberType += 1
  }else if(isString){
    amountStringType += 1
  }

}
console.log(`O crazyArray tem ${amountBooleanType} booleans, ${amountNumberType} números e ${amountStringType} strings.`)

/*
  06

  - Abaixo do array "randomNumbers", utilize um for loop para gerar 2 novos  
    arrays: um array com apenas os números ímpares do "randomNumbers" e um outro  
    array com apenas os números pares;
  - Após isso, utilizando os dois arrays que você criou, exiba a frase abaixo  
    no console, substituindo "XX, XX e XX" pelos números corretos. Os números  
    da frase não devem ser inseridos com a notação "item[index]" e os "e" antes  
    do último número ímpar e do último número par devem constar na frase;
  
  - Dica: para saber se um número é par, o restante da divisão dele por 2 deve  
    ser 0.

  "Numeros ímpares: XX, XX e XX. Números pares: XX, XX e XX."
*/
console.info('\n### Etapa 02 - Exercício: 06 ###\n ')

const randomNumbers = [73, 4, 67, 10, 31, 58]

const evenNumber = []
const oddNumbers = []

for (let i = 0; i < randomNumbers.length; i++) {

  const number = randomNumbers[i]
  const isEvenNumbers = number % 2 === 0

  if (isEvenNumbers) {
    evenNumber.push(number)
  }else {
    oddNumbers.push(number)
  }
}

console.log('even:', evenNumber)
console.log('odd:', oddNumbers)

const evenNumberString = evenNumber.join(', ').replace(', 5', ' e 5')
const oddNumbersString = oddNumbers.join(', ').replace(', 3',' e 3')

console.log(`Numeros ímpares: ${oddNumbersString}. Números pares: ${evenNumberString}`)