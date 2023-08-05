//parte 1 del desafio
const imagen = document.getElementById("imagenConBorde");
imagen.addEventListener("click", function () {
  if (imagen.classList.contains("con-borde")) {
    imagen.classList.remove("con-borde");
  } else {
    imagen.classList.add("con-borde");
  }
});
//parte 2 del desafio
const validadorDeBarajitas = () => {
  input1 = document.querySelector("#input1").value;
  input2 = document.querySelector("#input2").value;
  input3 = document.querySelector("#input3").value;
  suma = parseInt(input1) + parseInt(input2) + parseInt(input3);
  if (input1 < 0 || input2 < 0 || input3 < 0){
    textoVerificador = document.querySelector("#textoVerificador").innerHTML =
      "Ningún Valor Debe ser Negativo, Intenta nuevamente";
  }
};
const buttonVerificador = () => {
  input1 = document.querySelector("#input1").value;
  input2 = document.querySelector("#input2").value;
  input3 = document.querySelector("#input3").value;
  suma = parseInt(input1) + parseInt(input2) + parseInt(input3);

  if (suma <= 10) {
    textoVerificador = document.querySelector("#textoVerificador").innerHTML =
      "Llevas " + suma + " Barajitas";
    validadorDeBarajitas();
  } else if (suma > 10) {
    textoVerificador = document.querySelector("#textoVerificador").innerHTML =
      "Llevas demasiadas Barajitas, Máximo son 10 unidades";
  }
}
//parte 3 del desafio
const passwordVerificador = () => {
  select1 = document.querySelector("#select1").value
  select2 = document.querySelector("#select2").value
  select3 = document.querySelector("#select3").value
  textoInput = document.querySelector("#text-input")

  if (select1 == "9" && select2 == "1" && select3 == "1") {
      textoInput.innerHTML = "Password 1 Correcto."
  }
  else if (select1 == "7" && select2 == "1" && select3 == "4") {
      textoInput.innerHTML = "Password 2 Correcto."
  }
  else {
      textoInput.innerHTML = "Password Incorrecto."
  }
}