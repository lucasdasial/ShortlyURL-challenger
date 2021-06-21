const $urlUser = document.querySelector("#url-user");

const $shortenBtn = document.querySelector(".shorten-btn");

const $short_link = document.querySelector("#short_link");


$shortenBtn.addEventListener("click", () => {
  $short_link.innerHTML = "Gerando sua url, aguarde..."
  // console.log($urlUser.value)
  fetch(`https://api.shrtco.de/v2/shorten?url=${$urlUser.value}`)
  .then((res) => {
    return res.json();
  })
  .then((dados) => {
    // console.log(dados.result["short_link"])
    $short_link.innerHTML = dados.result["short_link"];
    let urlEncurtada = dados.result["short_link"]
    // console.log( urlEncurtada)
    return urlEncurtada
    });
    
});


const $btnCopy = document.querySelector("#btn-short-url");

$btnCopy.addEventListener("click",()=>{

})

