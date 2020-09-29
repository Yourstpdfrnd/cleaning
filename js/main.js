$(function(){


    $('.clean__inner .tab').on('click' ,function(event) {
        var id = $(this).attr('data-id');
          $('.clean__inner').find('.tab-item').removeClass('active-tab').hide();
          $('.clean__inner .tabs').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
        });

        $('.expert__slider').slick({
          nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
          prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
         
       });       
  
        $('.slider__item').slick({
          nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
          prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          
        });

         $('.new__slider').slick({
           nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
           prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
           infinite: true,
           slidesToShow: 4,
           slidesToScroll: 1,
          
         });
        $('.reviews__slider').slick({
          nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
          prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
           slidesToShow: 1,
           slidesToScroll: 1,
          
        });
        $('.discount__slider').slick({
          nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
          prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
          slidesToShow: 1,
          slidesToScroll: 1,
         
       });
        
        $('.questions__item-title').on('click', function(){
          $('.questions__item').removeClass('questions__item--active');
          $(this).parent().addClass('questions__item--active');
      
        });

        AOS.init();

        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
          // Global settings:
          disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
          startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
          initClassName: 'aos-init', // class applied after initialization
          animatedClassName: 'aos-animate', // class applied on animation
          useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
          disableMutationObserver: false, // disables automatic mutations' detections (advanced)
          debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
          throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
          
        
          // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
          offset: 120, // offset (in px) from the original trigger point
          delay: 0, // values from 0 to 3000, with step 50ms
          duration: 1500, // values from 0 to 3000, with step 50ms
          easing: 'ease', // default easing for AOS animations
          once: false, // whether animation should happen only once - while scrolling down
          mirror: false, // whether elements should animate out while scrolling past them
          anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        
        });

          $('.work__inner .work__tab').on('click', function(event) {
            var id = $(this).attr('data-id');
              $('.work__inner').find('.tabs-item').removeClass('active-tabs').hide();
              $('.work__inner .work__tabs').find('.work__tab').removeClass('active');
              $(this).addClass('active');
              $('#'+id).addClass('active-tabs').fadeIn();
              return false;
            }); 
});