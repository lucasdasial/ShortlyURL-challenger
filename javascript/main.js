const $urlUser = document.querySelector('#url-user')

const $shortenBtn = document.querySelector('.shorten-btn')

const $short_link = document.querySelector('#short_link')

const $btnCopy = document.querySelector('#btn-short-url')

$shortenBtn.addEventListener('click', () => {
  $short_link.innerHTML = 'Gerando sua url, aguarde...'

  fetch(`https://api.shrtco.de/v2/shorten?url=${$urlUser.value}`)
    .then((res) => {
      return res.json()
    })
    .then((dados) => {
      $short_link.innerHTML = dados.result['short_link']
      $btnCopy.addEventListener('click', () => {
        /* O método select() só funciona em inputs */
        navigator.clipboard.writeText(dados.result['short_link']).then(
          () => {
            console.log('Copiado com sucesso')
          },
          () => {
            console.log('Erro ao copiar para área de transferência')
          }
        )
      })
    })
})