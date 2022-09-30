// Criando uma constante para receber o botão.
const guessGenerator = document.querySelector('.generate')

// Criação da lista com os 10 números mais sorteados da Mega-Sena.
const moreDrawn = [53, 10, 23, 05, 33, 04, 27, 54, 24, 42]

// Criação da lista com os 10 números menos sorteados da Mega-sena.
const lessDrawn = [42, 44, 21, 54, 56, 47, 51, 26, 07, 09]

/* Criando um evento que aguarda por um clique
    quando ele é dado, dispara uma função anônima. */
guessGenerator.addEventListener('click', () => {
  // Criação da lista que irá receber todos os números do palpite.
  let guess = []
  let i = 0

  while (i <= 14) {
    guess.push(document.getElementById(`ball${i}`).value)
    i++
  }

  const checkNull = array => {
    for (let index = 0; index < array.length; index++) {
      if (array[index] == null) return false
    }
    return true
  }

  console.log(guess)

  if (checkNull(guess)) {
    let numberOfGamesToBeGenerated = 0
    while (numberOfGamesToBeGenerated <= 9) {
      i = 0

      // const random = Math.floor(Math.random() * guess.length)
      // console.log('Result => ', guess[random])

      let game6digits = []
      while (i < 6) {
        let random = Math.floor(Math.random() * guess.length)
        let tst = guess[random]
        console.log(tst)
        if (game6digits.indexOf(guess[random]) === -1) {
          console.log(guess[random])
          game6digits.push(guess[random])
          i++
        }
      }

      game6digits.sort((a, b) => {
        a - b
      })

      console.log(game6digits)

      /* Iteração para preencher o HTML com os números da lista.
    Adicionalmente, estou manipulando o CSS, adicionando e
    removendo classes de acordo com os números mais e menos
    sorteados */
      for (j = 0; j < game6digits.length; j++) {
        console.log(`#ball-result-game${numberOfGamesToBeGenerated}-${j}`)
        let ball = document.querySelector(
          `#ball-result-game${numberOfGamesToBeGenerated}-${j}`
        )
        let alertFlag = document.querySelector(
          `#alert${numberOfGamesToBeGenerated}-${j}`
        )

        ball.classList.remove('less-drawn', 'more-drawn')

        alertFlag.classList.remove(`alert`, 'alert-primary', 'alert-danger')

        alertFlag.innerHTML = ''

        ball.innerHTML = game6digits[j]

        if (moreDrawn.includes(game6digits[j])) {
          ball.classList.add('more-drawn')
          alertFlag.classList.add(`alert`, 'alert-danger')
          alertFlag.innerHTML = '🔥'
        } else if (lessDrawn.includes(game6digits[j])) {
          ball.classList.add('less-drawn')
          alertFlag.classList.add(`alert`, 'alert-primary')
          alertFlag.innerHTML = '🧊'
        }
      }
      numberOfGamesToBeGenerated++
    }
  }
})
