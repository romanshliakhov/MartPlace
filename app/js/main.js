$(function(){       
    $(".rate-star").rateYo({
        rating: 5,        
        fullStar: true,
        starWidth: "15px",
        spacing: "3px",
        normalFill: "#A0A0A0",
    });    

    $('.weekly__slider').slick({        
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        appendArrows: $('.weekly__inner-arrows'),
        nextArrow: '<button type="submit" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="submit" class="slick-btn slick-prev"></button>',             
    });
    
    var mixer = mixitup('.products__catalogue');
});