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
        nextArrow: '<button type="submit" class="weekly__arrows"><div class="weekly__arrow weekly__arrow-next"></div></button>',
        prevArrow: '<button type="submit" class="weekly__arrows"><div class="weekly__arrow weekly__arrow-prev"></div></button>',    
        appendArrows: $('.weekly__inner-arrows'),            
    });
    
    var mixer = mixitup('.products__catalogue');
});