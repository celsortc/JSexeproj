let calcular = document.querySelector(".btnCalcular");
let resultado = document.getElementById("resultado");

calcular.addEventListener("click", exec);

function exec(event) {
  event.preventDefault();

  if (!!document.querySelector(".num").value) {
    let numero = document.querySelector(".num").value;

    if (numero % 2 === 0) {
      resultado.innerHTML = `${numero} é par`;
    } else {
      resultado.innerHTML = `${numero} é ímpar`;
    }
  } else alert("insira um número antes!");
}
