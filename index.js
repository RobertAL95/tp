  // Obtener el enlace y la sección correspondiente
  var link = document.querySelector('a[data-filter="pizzas"]');
  var section = document.querySelector('.menu-item-pizzas');

  // Agregar un evento de clic al enlace
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir la acción predeterminada del enlace
    section.style.display = 'block'; // Mostrar la sección correspondiente
  });