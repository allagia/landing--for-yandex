document.addEventListener("DOMContentLoaded", function() {
  
  // Слайдер с этапами
  const stagesSlider = document.querySelector('.stages .swiper');
  let swiperstages;
  
  function initStagesSlider() {
    if (window.innerWidth <= 768 && !swiperstages) {
      swiperstages = new Swiper(stagesSlider, {
        slidesPerView: 1,
        navigation: {
          nextEl: '.stages .swiper-button-next',
          prevEl: '.stages .swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    } else if (window.innerWidth > 768 && swiperstages) {
      swiperstages.destroy(true, true); // Уничтожаем слайдер при разрешении >768px
      swiperstages = undefined;
    }
  }
  
  // Инициализация слайдера при загрузке страницы
  initStagesSlider();
  
  // Отслеживаем изменение размера окна
  window.addEventListener('resize', initStagesSlider);




  // Слайдер с участниками
  const participantsSlider = document.querySelector('.participants .swiper');

  const swiperparticipants = new Swiper(participantsSlider, {
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    autoplay: {
      delay: 4000,
    },
    loop: true,

    pagination: {
      el: ".participants .swiper-pagination",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return `
          <span class="${currentClass}"></span>
          /
          <span class="${totalClass}">${this.slides.length}</span>
        `;
      },
    },
    
    navigation: {
      nextEl: '.participants .swiper-button-next',
      prevEl: '.participants .swiper-button-prev',
    },
  });
  

});