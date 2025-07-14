document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    ramo.classList.toggle('aprobado');
  });
});


// Guardar estado
document.querySelectorAll('.ramo').forEach((ramo, index) => {
  const key = `ramo-${index}`;
  if (localStorage.getItem(key) === 'true') {
    ramo.classList.add('aprobado');
  }

  ramo.addEventListener('click', () => {
    ramo.classList.toggle('aprobado');
    localStorage.setItem(key, ramo.classList.contains('aprobado'));
  });
});

