let calcular = document.querySelector(".btnCalcular");
let resultado = document.getElementById("resultado");

calcular.addEventListener("click", soma);

function soma(event) {
  event.preventDefault();
  let numeros = document.querySelectorAll(".num");
  console.log(numeros);

  let total = 0;
  numeros.forEach((num) => {
    total += parseFloat(num.value);
  });
  resultado.innerHTML = total;
}
