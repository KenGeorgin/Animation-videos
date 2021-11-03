$(document).ready(function(){
    //variables
    $surface = $('.surface');
    $car = $('.car');
    $img = ('.car img');
    let flag = true

    const cars = ['images/Img_06.png','images/Img_05.png'];

    //keypress events
    $(document).on('keypress',function(e){
        if(e.which == 13){
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('jump');
        }
    })

    $(document).on('keypress',function(e){
        if(e.which == 119){
            if(flag){
                flag = false;
                $img.attr('src',cars[0]);   
            }else{
                flag = true;
                $img.attr('src',cars[1]);    
            }
        }
    })
});