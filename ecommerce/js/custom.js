$(function(){
  $('.slider').slick({
    //Бесконечная прокрутка    
    infinite: true,  
    centerMode: true,
    variableWidth: true,    
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    //адаптивная высота    
    adaptiveHeight: true,
    prevArrow: '<button class="slick-arrow__slick-prev"><i class="fas fa-chevron-circle-left"></i></batton>',
    nextArrow: '<button class="slick-arrow__slick-next"><i class="fas fa-chevron-circle-right"></i></batton>',
    //Верстка под ширину экрана
    responsive: [
      {
      //   breakpoint: 1600,
      // settings: {
      //   slidesToShow: 3,
      //   slidesToScroll: 3,
      //   infinite: true,
      //   dots: true
      // }
    }]
  });
});
