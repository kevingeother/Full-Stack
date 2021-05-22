// Tooltips JS -->
        // $(document).ready(function(){
        //     $('[data-toggle="tooltip"]').tooltip();
        // });
    
// <!-- Two button Carousel Controls -->
        // $(document).ready(function(){
        //     $('#mycarousel').carousel({ interval: 2000});
        //     $('#carousel-pause').click(function(){
        //         $('#mycarousel').carousel('pause');
        //     });
        //     $('#carousel-play').click(function(){
        //         $('#mycarousel').carousel('cycle');
        //     });
        // });


// <!-- One button Carousel Controls -->
$(document).ready(function(){
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else{
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});

// <!-- Reserve JScript -->
$('#reserveButton').click(function(){
    $('#reserveModal').modal('show');
});

// <!-- Login JScript -->
$('#loginButton').click(function(){
    $('#loginModal').modal("show");
});