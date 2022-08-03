  const carousel = document.querySelector('[data-ride]');

  
    carousel.addEventListener('click', (e) => {
      const firstElement = carousel.querySelector('.carousel-item:first-child');
      const lastElement = carousel.querySelector('.carousel-item:last-child');

      const prevButton = carousel.querySelector('.carousel-control-prev');
      const nextButton = carousel.querySelector('.carousel-control-next');

      const activeElement = carousel.querySelector('.activeCarousel');

      if (e.target === prevButton) {
        const currentElement = activeElement.previousElementSibling || lastElement;
        currentElement.classList.add('activeCarousel');
        activeElement.classList.remove('activeCarousel');
      }
      if (e.target === nextButton) {
        const currentElement = activeElement.nextElementSibling || firstElement;
        currentElement.classList.add('activeCarousel');
        activeElement.classList.remove('activeCarousel');
      }
    });
 
    
    /*const buttons = document.querySelector('[data-slide]');
    
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const carousel = document.querySelector('[data-ride]');
            const firstElement = carousel.querySelector('.carousel-item:first-child');
      const lastElement = carousel.querySelector('.carousel-item:last-child');

      const prevButton = carousel.querySelector('.carousel-control-prev');
      const nextButton = carousel.querySelector('.carousel-control-next');

      const activeElement = carousel.querySelector('.activeCarousel');

      if (e.target === prevButton) {
        const currentElement = activeElement.previousElementSibling || lastElement;
        currentElement.classList.add('activeCarousel');
        activeElement.classList.remove('activeCarousel');
      }
      if (e.target === nextButton) {
        const currentElement = activeElement.nextElementSibling || firstElement;
        currentElement.classList.add('activeCarousel');
        activeElement.classList.remove('activeCarousel');
      }
    })
});*/

