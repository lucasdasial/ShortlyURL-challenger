const $urlUser = document.querySelector("#url-user");

const $shortenBtn = document.querySelector(".shorten-btn");

const $short_link = document.querySelector("#short_link");

const $btnCopy = document.querySelector("#btn-short-url");

let urlNova = "";

// function criaHistorico(){
//   const div = `
//     <div class="url-shortened-box">
//       <div id="short_link"><p>Sua URL encurtada!</p></div>
//       <button id="btn-short-url"><i class="far fa-copy"></i></button>
//     </div>`

//   document.querySelector("#start-target").innerHTML += div
// }

$shortenBtn.addEventListener("click", () => {
  console.log($urlUser.value)
  $short_link.innerHTML = "Gerando sua url, aguarde..."
  
  fetch(`https://api.shrtco.de/v2/shorten?url=${$urlUser.value}`)
  .then((res) => {
    return res.json();
  })
  .then((dados) => {
    
    $short_link.innerHTML = dados.result["short_link"];
    let urlEncurtada = dados.result["short_link"];
    console.log(`Nova url encurtada é ${urlEncurtada}`);
    urlNova = urlEncurtada;
    return urlEncurtada;
    
    });
    
    
    $btnCopy.addEventListener('click', ()=>{
      console.log(urlNova);
      urlNova.select(); //não estou conseguindo passar o metodo .select
      document.execCommand('copy');
    })
});






