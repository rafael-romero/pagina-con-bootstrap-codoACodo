const valorTicket = 200;
const porcentajeDeDescuento = {
  1: "80",
  2: "50",
  3: "15",
};

function borrarFormulario() {
  const formularioComprarTickets = document.querySelector(
    ".formulario-comprar-tickets"
  );
  formularioComprarTickets.reset();
}
const btnBorrar = document.querySelector("#btn-borrar");
btnBorrar.addEventListener("click", borrarFormulario);

function resetearInputAPagar() {
  inputAPagar.value = "Total a Pagar: $ ";
  inputAPagar.classList.remove("error");
}

function validarNumeroTickets(numeroTickets) {
  const dosSegundosEnMilisegundos = 2000;
  if (numeroTickets === "" || numeroTickets > 999 || numeroTickets < 1) {
    inputAPagar.value = "Debe elegir entre 1 y 999 tickets!!!";
    inputAPagar.classList.add("error");
    setTimeout(resetearInputAPagar, dosSegundosEnMilisegundos);
    return false;
  }
  return true;
}

const inputAPagar = document.querySelector("#total-a-pagar");
function resumenAPagar() {
  const cantidadTickets = document.querySelector("#cantidad-input");
  const seleccionCategoria = document.querySelector("#input-select");
  if (!validarNumeroTickets(cantidadTickets.value)) {
    return false;
  }

  const totalTickets = cantidadTickets.value * valorTicket;
  const totalApagar =
    totalTickets -
    totalTickets * (porcentajeDeDescuento[seleccionCategoria.value] / 100);
  resetearInputAPagar();
  inputAPagar.value += totalApagar;
}

const btnResumen = document.querySelector("#btn-resumen");
btnResumen.addEventListener("click", resumenAPagar);
