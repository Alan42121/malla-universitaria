function toggleEstado(elemento) {
  if (elemento.classList.contains("pendiente")) {
    elemento.classList.remove("pendiente");
    elemento.classList.add("en-curso");
  } else if (elemento.classList.contains("en-curso")) {
    elemento.classList.remove("en-curso");
    elemento.classList.add("aprobado");
  } else if (elemento.classList.contains("aprobado")) {
    elemento.classList.remove("aprobado");
    elemento.classList.add("pendiente");
  } else {
    elemento.classList.add("pendiente");
  }
}
