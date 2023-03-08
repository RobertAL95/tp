  // // Obtener el enlace y la sección correspondiente
  // const link = document.querySelector('a[data-filter="pizzas"]');
  // const section = document.querySelector('.menu-item-pizzas');

  // // Agregar un evento de clic al enlace
  // link.addEventListener('click', function(e) {
  //   e.preventDefault(); // Prevenir la acción predeterminada del enlace
  //   section.style.display = 'block'; // Mostrar la sección correspondiente
  // });

  const Scroll = () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slideWidth = slides[0].clientWidth;


    console.log(slider)
  let slideIndex = 0;

  // Mover el slider a la posición actual
  const moveSlider = () => {
    slider.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
  }

  // Cambiar a la diapositiva anterior
  const prevSlide = () => {
    if (slideIndex === 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex--;
    }
    moveSlider();
  }

  // Cambiar a la siguiente diapositiva
  const nextSlide = () => {
    if (slideIndex === slides.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    moveSlider();
  }

  // Agregar eventos a los botones de navegación
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

};

Scroll();



