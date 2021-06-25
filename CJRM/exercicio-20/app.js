console.info(
  `
  \n###########################     EXERCISES CHAPTER 20   ###########################

  `
)

/* 
  01

  - Insira apenas o css do bootstrap no index.html.
*/
console.info("## Exercise >> 01")

console.log(`
  -[x] Insira apenas o css do bootstrap no index.html.

`)
/* 
  02

  - Após um segundo e meio do carregamento da página, exiba no console a  
    mensagem "Um segundo e meio se passaram desde que a página foi carregada".
*/
// const infoTask = () => console.info("## Exercise >> 02")
const msg = "Um segundo e meio se passaram desde que a página foi carregada"

// const logMessage = () => {
//   infoTask()
//   console.log(`
//     ${msg}
//   `)
// }

// setTimeout(()=>{
//   logMessage()
// }, 1000, logMessage)

setTimeout(console.info, 1000, "## Exercise >> 02")
setTimeout(console.log, 1500, msg)
/* 
  03

  - Faça o contador do index.html funcionar;
  - O clique no botão "Parar contador" deve fazer com que o contador exiba 0.
*/
console.info("## Exercise >> 03")

let number = document.querySelector('h1')
let timer = null
const buttonInitCounter = document.querySelector('.button-init-counter')
const buttonStopCounter = document.querySelector('.button-stop-counter')
const resetCounter = document.querySelector('.button-reset-counter')

const stopCounter = () => {
  clearInterval(timer)
}

const incrementCounter = () => {
  const incrementedCounter = Number(++number.textContent)
  number.textContent = incrementedCounter
}

buttonInitCounter.addEventListener('click', event => {
  timer = setInterval(incrementCounter, 500)
})

buttonStopCounter.addEventListener('click', event => {
  stopCounter()
})

resetCounter.addEventListener('click', event => {
  stopCounter()
  number.textContent = 0
})


/* 
  04

  - A partir deste exercício, vamos voltar a trabalhar na sua versão do Quiz =D
  - Adicione mais 2 alternativas em cada pergunta do quiz.
*/

console.info("## Exercise >> 04")


/* 
  05

  - Modifique a ordem das alternativas corretas. Ou seja, faça com que a  
    alternativa correta das perguntas não seja apenas a alternativa "B".
*/
console.info("## Exercise >> 05")


/* 
  06

  - Refatore o código.
  
  Dicas: 
    - Primeiro, quebre o código da função de callback de envio do form em  
      funções isoladas;
    - Depois, cuide da legibilidade das funções.
*/
console.info("## Exercise >> 06")

/* 
  07

  O exercício agora é considerarmos fazer dessa aplicação uma peça do seu 
  portfólio.

  Se você conseguiu executar o exercício da aula passada, especialmente sem ter  
  que rever partes da aula, ou seja, se você sente que desenvolveu a sua versão  
  do quiz por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  A ideia é: considere inserir a sua versão do quiz em seu portifólio apenas se 
  você sente que *aprendeu* a desenvolvê-la.

  Se você ainda não tem um site próprio para hospedar os arquivos da aplicação, 
  você pode hospedá-la no Netlify seguindo este tutorial: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/

console.info("## Exercise >> 07")

