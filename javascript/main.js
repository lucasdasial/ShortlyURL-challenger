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
      try {
        $short_link.innerHTML = dados.result['short_link'];
      } catch (error) {
        console.log("Menssagem do erro: " + error.message );
        alert("Ocorreu um error, nã foi possivel gerar sua url");
      }
      
      $btnCopy.addEventListener('click', () => {
        /* O método select() só funciona em inputs */
        navigator.clipboard.writeText(dados.result['short_link']).then(
          () => {
            alert('Link copiado com sucesso!')
          },
          () => {
            alert('Erro ao copiar para área de transferência')
          }
        )
      })
    })
})