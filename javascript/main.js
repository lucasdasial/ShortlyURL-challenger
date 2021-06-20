const $linkUser = document.querySelector("#search");

const $btnSubmit = document.querySelector("#submit");

const $short_link = document.querySelector("#short_link");

$btnSubmit.addEventListener("click", () => {
    console.log($linkUser.value)
  fetch(`https://api.shrtco.de/v2/shorten?url=${$linkUser.value}`)
    .then((res) => {
        return res.json();
    })
    .then((dados) => {
      $short_link.innerHTML = dados.result["short_link"];
    });
});
