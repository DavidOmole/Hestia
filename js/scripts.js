$(document).ready(function () {
  $(".featured-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    responsive: [
      {
        breakpoint: 1050, //taking 20px padding into consideration
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 787, //taking 20px padding into consideration
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 2,
      //   },
      // },
      {
        breakpoint: 690, //taking 20px padding into consideration
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
        breakpoint: 600, //taking 20px padding into consideration
        settings: {
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
