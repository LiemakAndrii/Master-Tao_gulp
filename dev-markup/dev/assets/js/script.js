// ! Вызов слайдера 14.2
$(document).ready(function () {
  $(".first-screen-slider").slick({
    dots: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // ! Контейнер для стрелочек lesson16
  // $(document).ready(function () {
  //   $(".first-screen-slider").slick({
  //     dots: true,
  //     appendArrows: ".first-screen__container-arrow"
  //   });
  // });

  // Слайдер для .advantages-slider с брейкпоинтом 991 (ориг. https://codepen.io/RostikSuslov/pen/eYMQGdM)
  mobileOnlySlider(".advantages-slider", true, false, 991);
  function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
    var slider = $($slidername);
    var settings = {
      mobileFirst: true,
      dots: $dots,
      arrows: $arrows,
      responsive: [
        {
          breakpoint: $breakpoint,
          settings: "unslick",
        },
      ],
    };

    slider.slick(settings);

    $(window).on("resize", function () {
      if ($(window).width() > $breakpoint) {
        return;
      }
      if (!slider.hasClass("slick-initialized")) {
        return slider.slick(settings);
      }
    });
  } // Mobile Only Slider

  $(".slider-delivery").slick({
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1299.99,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

// ! Button loud file
